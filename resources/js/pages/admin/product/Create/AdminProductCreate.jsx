import { useState, useCallback } from 'react';
import classNames from 'classnames/bind';

import config from '~/config';
import styles from './AdminProductCreate.module.scss';
import Content from '~/common/Content/Content';
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import StepThree from './StepThree/StepThree';
import { OutInTransition } from '~/animations/Transition';
import StepHeader from './Part/StepHeader';
import ActionsBtns from './Part/ActionsBtns';
import axios from 'axios';

const cx = classNames.bind(styles);

const BREADCRUMB = [
    {
        title: 'Trang chủ',
        link: config.routes.admin.dashboard,
    },
    {
        title: 'Sản phẩm - Thêm mới',
        link: config.routes.admin.productCreate,
    },
];

const AdminProductCreate = () => {
    const [step, setStep] = useState(1);
    const [product, setProduct] = useState({
        name: '',
        category_id: '',
        original_price: '',
        price: '',
        image: '',
        avatar: '',
        intro: '',
        detail: '',
        preserve: '',
        sale: '',
    });
    const [categoryName, setCategoryName] = useState('');
    const [saleType, setSaleType] = useState('not');

    const [variants, setVariants] = useState([
        {
            s: '',
            m: '',
            l: '',
            xl: '',
            xxl: '',
            images: [],
            image_paths: '',
            color_id: '',
            error: '',
        },
    ]);

    const [messages, setMessages] = useState([]);
    const [errors, setErrors] = useState({
        productName: '',
        productCategory: '',
        productPrice: '',
        fetch: '',
        variantColor: '',
    });
    const [loading, setLoading] = useState(false);

    console.log(product);

    const continueCreateProduct = useCallback(() => {
        setProduct({
            name: '',
            category_id: '',
            original_price: '',
            price: '',
            image: '',
            avatar: '',
            intro: '',
            detail: '',
            preserve: '',
            sale: '',
        });

        setVariants([
            {
                s: '',
                m: '',
                l: '',
                xl: '',
                xxl: '',
                images: [],
                image_paths: '',
                color_id: '',
            },
        ]);

        setSaleType('not');
        setCategoryName('');
        setMessages([]);
        setErrors({
            productName: '',
            productCategory: '',
            productPrice: '',
            fetch: '',
            variantColor: '',
        });
        setStep(1);
    }, []);

    const UploadImage = useCallback(async (image) => {
        const formData = new FormData();
        formData.append('image', image);

        const response = await axios.post('/api/upload/image', formData, {
            headers: { 'content-Type': 'multipart/form-data' },
        });
        return response.data.image;
    }, []);

    const createProduct = useCallback(async (productData, saleTypeData) => {
        if (saleTypeData === 'percent') {
            productData.sale = `${productData.sale}%`;
        }

        if (productData.image !== '') {
            productData.avatar = await UploadImage(productData.image);
        }

        const response = await axios.post('/api/product/create', productData);
        if (response.status === 201) {
            setMessages((prev) => [...prev, response.data.message]);
            return response.data.product.id;
        } else {
            setErrors((prev) => [...prev, response.data.message]);
            return null;
        }
    }, []);

    const UploadImages = useCallback(async (images) => {
        const formData = new FormData();
        images.forEach((image) => formData.append('images[]', image));

        const response = await axios.post('/api/upload/images', formData, {
            headers: { 'content-Type': 'multipart/form-data' },
        });
        return response.data.image_paths;
    }, []);

    const createVariant = useCallback(async (variant, productId) => {
        if (variant.images.length > 0) {
            variant.image_paths = await UploadImages(variant.images);
        }

        const response = await axios.post(`/api/product/variant/create/${productId}`, variant);
        if (response.status === 201) {
            setMessages((prev) => [...prev, response.data.message]);
        } else {
            setErrors((prev) => [...prev, response.data.message]);
        }
    }, []);

    const submitProduct = useCallback(
        async (e) => {
            e.preventDefault();
            setStep(3);
            setLoading(true);

            try {
                const productId = await createProduct(product, saleType);
                if (productId) {
                    await Promise.all(variants.map((variant) => createVariant(variant, productId)));
                }
            } catch (error) {
                console.error('Chưa tạo được sản phẩm', error);
            } finally {
                setLoading(false);
            }
        },
        [product, variants, createProduct, createVariant],
    );

    return (
        <Content breadcrumb={BREADCRUMB}>
            <form className={cx('admin-product-create')}>
                <StepHeader step={step} setStep={setStep} />

                <div className={cx('step-content')}>
                    <OutInTransition state={step}>
                        {step === 1 ? (
                            <StepOne
                                product={product}
                                categoryName={categoryName}
                                saleType={saleType}
                                setProduct={setProduct}
                                setCategoryName={setCategoryName}
                                setSaleType={setSaleType}
                                errors={errors}
                                setErrors={setErrors}
                            />
                        ) : step === 2 ? (
                            <StepTwo variants={variants} setVariants={setVariants} />
                        ) : (
                            <StepThree loading={loading} messages={messages} />
                        )}
                    </OutInTransition>
                </div>

                <ActionsBtns
                    step={step}
                    product={product}
                    variants={variants}
                    loading={loading}
                    setStep={setStep}
                    setErrors={setErrors}
                    setVariants={setVariants}
                    onSubmit={submitProduct}
                    continueCreateProduct={continueCreateProduct}
                />
            </form>
        </Content>
    );
};

export default AdminProductCreate;
