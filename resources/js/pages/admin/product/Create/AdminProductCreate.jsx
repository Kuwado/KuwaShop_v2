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

    console.log(product);

    const handleSubmit = () => {};

    const handleNextStep = (p) => {
        setProduct(p);
        setStep('two');
    };

    return (
        <Content breadcrumb={BREADCRUMB}>
            <form className={cx('product-create')}>
                <div className={cx('step-header')}>
                    <div className={cx('step-item', { active: step >= 1 })} onClick={() => setStep(1)}>
                        <span className={cx('circle')}>1</span>
                        <span className={cx('step-name')}>Thông tin sản phẩm</span>
                    </div>
                    <div className={cx('step-item', { active: step >= 2 })} onClick={() => setStep(2)}>
                        <span className={cx('circle')}>2</span>
                        <span className={cx('step-name')}>Màu sắc và số lượng</span>
                    </div>
                    <div className={cx('step-item', { active: step >= 3 })} onClick={() => setStep(3)}>
                        <span className={cx('circle')}>3</span>
                        <span className={cx('step-name')}>Kết quả</span>
                    </div>
                </div>

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
                            <StepTwo onClick={() => setStep(1)} onSubmit={handleSubmit} />
                        ) : (
                            <StepThree />
                        )}
                    </OutInTransition>
                </div>

                <div className={cx('action-btns')}>
                    {step === 1 ? (
                        <div className={cx('step-one-btn')}>
                            <Button
                                type="button"
                                onClick={() => setStep(2)}
                                rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                            >
                                Bước tiếp
                            </Button>
                        </div>
                    ) : step === 2 ? (
                        <div className={cx('step-two-btn')}>
                            <Button
                                type="button"
                                onClick={() => setStep(1)}
                                leftIcon={<FontAwesomeIcon icon={faArrowLeft} />}
                            >
                                Quay lại
                            </Button>
                            <Button
                                type="button"
                                onClick={() => setStep(3)}
                                rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                            >
                                Bước tiếp
                            </Button>
                        </div>
                    ) : (
                        <div className={cx('step-three-btn')}>
                            <Button
                                type="button"
                                onClick={() => setStep(2)}
                                leftIcon={<FontAwesomeIcon icon={faArrowLeft} />}
                            >
                                Quay lại
                            </Button>
                        </div>
                    )}
                </div>
            </form>
        </Content>
    );
};

export default AdminProductCreate;
