import { useState } from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';

import config from '~/config';
import Content from '~/common/Content/Content';
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import StepThree from './StepThree/StepThree';
import { OutInTransition } from '~/animations/Transition';
import StepHeader from './Part/StepHeader';
import ActionsBtns from './Part/ActionsBtns';

const cx = classNames.bind(styles);

const BREADCRUMB = [
    { title: 'Trang chủ', link: config.routes.admin.dashboard },
    { title: 'Sản phẩm - Thêm mới', link: config.routes.admin.productCreate },
];

// Custom hook for managing product state and submission
const useProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        category_id: '',
        original_price: '',
        price: '',
        intro: '',
        detail: '',
        preserve: '',
        sale: '',
    });

    const createProduct = async () => {
        const response = await axios.post('/api/product/create', product);
        return response.status === 201 ? response.data.product.id : null;
    };

    return { product, setProduct, createProduct };
};

// Custom hook for managing variants
const useVariants = () => {
    const [variants, setVariants] = useState([
        { s: '', m: '', l: '', xl: '', xxl: '', images: [], image_paths: '', color_id: '' },
    ]);

    const uploadImages = async (images) => {
        const formData = new FormData();
        images.forEach((image) => formData.append('images[]', image));

        const response = await axios.post('/api/upload-images', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data.image_paths;
    };

    const createVariant = async (variant, productId) => {
        if (variant.images.length > 0) {
            variant.image_paths = await uploadImages(variant.images);
        }

        const response = await axios.post(`/api/product/variant/create/${productId}`, variant);
        return response.status === 201;
    };

    return { variants, setVariants, createVariant };
};

// Custom hook for managing messages and errors
const useMessages = () => {
    const [messages, setMessages] = useState([]);
    const [errors, setErrors] = useState([]);

    const addMessage = (message) => setMessages((prev) => [...prev, message]);
    const addError = (error) => setErrors((prev) => [...prev, error]);

    return { messages, errors, addMessage, addError };
};

const AdminProductCreate = () => {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);

    const { product, setProduct, createProduct } = useProduct();
    const { variants, setVariants, createVariant } = useVariants();
    const { messages, errors, addMessage, addError } = useMessages();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStep(3);
        setLoading(true);

        try {
            const productId = await createProduct();
            if (productId) {
                await Promise.all(variants.map((variant) => createVariant(variant, productId)));
                addMessage('Sản phẩm và biến thể đã được tạo thành công!');
            }
        } catch (error) {
            console.error('Chưa tạo được sản phẩm', error);
            addError('Đã xảy ra lỗi khi tạo sản phẩm.');
        } finally {
            setLoading(false);
        }
    };

    const continueCreateProduct = () => {
        setProduct({
            name: '',
            category_id: '',
            original_price: '',
            price: '',
            intro: '',
            detail: '',
            preserve: '',
            sale: '',
        });
        setVariants([{ s: '', m: '', l: '', xl: '', xxl: '', images: [], image_paths: '', color_id: '' }]);
        setStep(1);
    };

    return (
        <Content breadcrumb={BREADCRUMB}>
            <form className={cx('product-create')}>
                <StepHeader step={step} setStep={setStep} />

                <div className={cx('step-content')}>
                    <OutInTransition state={step}>
                        {step === 1 ? (
                            <StepOne product={product} setProduct={setProduct} />
                        ) : step === 2 ? (
                            <StepTwo variants={variants} setVariants={setVariants} />
                        ) : (
                            <StepThree loading={loading} messages={messages} errors={errors} />
                        )}
                    </OutInTransition>
                </div>

                <ActionsBtns
                    step={step}
                    setStep={setStep}
                    handleSubmit={handleSubmit}
                    continueCreateProduct={continueCreateProduct}
                />
            </form>
        </Content>
    );
};

export default AdminProductCreate;
