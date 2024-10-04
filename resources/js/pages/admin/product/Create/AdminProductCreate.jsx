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
import useProduct from '~/hooks/useProduct';
import useVariants from '~/hooks/useVariants';
import { createProduct } from '~/services/productService';
import { createVariant } from '~/services/variantsService';

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
    const { product, setProduct, saleType, setSaleType, resetProduct } = useProduct();
    const { variants, setVariants, resetVariants } = useVariants();

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
        resetProduct();
        resetVariants();
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

    const submitProduct = useCallback(
        async (e) => {
            e.preventDefault();
            setStep(3);
            setLoading(true);

            try {
                const productResponse = await createProduct(product, saleType);
                setMessages((prev) => [...prev, productResponse.message]);
                const productId = productResponse.product.id;

                await Promise.all(
                    variants.map(async (variant) => {
                        const variantResponse = await createVariant(variant, productId);
                        setMessages((prev) => [...prev, variantResponse.message]);
                    }),
                );
            } catch (error) {
                console.error('Chưa tạo được sản phẩm', error);
            } finally {
                setLoading(false);
            }
        },
        [product, variants],
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
                                saleType={saleType}
                                setProduct={setProduct}
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
