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
        sku: '',
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

    const [colorId, setColorId] = useState();

    console.log(product);

    const handleSubmit = () => {};

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
                                onClick={handleNextStep}
                                step={step}
                                setStep={setStep}
                            />
                        ) : step === 2 ? (
                            <StepTwo variants={variants} setVariants={setVariants} />
                        ) : (
                            <StepThree />
                        )}
                    </OutInTransition>
                </div>

                <ActionsBtns step={step} setStep={setStep} />
            </form>
        </Content>
    );
};

export default AdminProductCreate;
