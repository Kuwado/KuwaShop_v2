import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import config from '~/config';
import styles from './AdminProductCreate.module.scss';
import Content from '~/common/Content/Content';
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import StepThree from './StepThree/StepThree';
import { OutInTransition } from '~/animations/Transition';
import { Button } from '~/components/Button';
import StepHeader from './Part/StepHeader';
import ActionsBtns from './Part/ActionsBtns';
import Colors from './StepTwo/Colors';
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
            color_id: '',
            product_id: '',
        },
    ]);

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log(product);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStep(3);
        setLoading(true);

        const filteredProduct = Object.fromEntries(Object.entries(product).filter(([_, value]) => value !== ''));

        try {
            const productResponse = await axios.post('/api/product/create', filteredProduct);
            if (productResponse.status === 201) {
                setLoading(false);
                setMessages((prev) => [...prev, productResponse.data.message]);
                const productId = productResponse.data.product.id;
                setVariants((prevVariants) => prevVariants.map((variant) => ({ ...variant, product_id: productId })));
                console.log(variants);
            }
            console.log(productResponse);
        } catch (error) {
            console.error('Chưa tạo được sản phẩm', error);
        }
    };

    const handleNextStep = (p) => {
        setProduct(p);
        setStep('two');
    };

    return (
        <Content breadcrumb={BREADCRUMB}>
            <form className={cx('product-create')}>
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
                            />
                        ) : step === 2 ? (
                            <StepTwo variants={variants} setVariants={setVariants} />
                        ) : (
                            <StepThree loading={loading} messages={messages} />
                        )}
                    </OutInTransition>
                </div>

                <ActionsBtns step={step} setStep={setStep} handleSubmit={handleSubmit} setMessages={setMessages} />
            </form>
        </Content>
    );
};

export default AdminProductCreate;
