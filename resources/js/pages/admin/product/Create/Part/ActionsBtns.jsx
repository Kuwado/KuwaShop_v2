import { useCallback, memo } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Part.module.scss';
import config from '~/config';
import { Button } from '~/components/Button';

const cx = classNames.bind(styles);

const ActionsBtns = ({
    step,
    product,
    variants,
    loading,
    setStep,
    setErrors,
    setVariants,
    onSubmit,
    continueCreateProduct,
}) => {
    const handleGoToStepTwo = () => {
        if (product.name === '') {
            setErrors((prev) => ({ ...prev, productName: 'Vui lòng nhập tên sản phẩm' }));
        } else if (product.category_id === '') {
            setErrors((prev) => ({ ...prev, productCategory: 'Vui lòng chọn' }));
        } else if (product.original_price === '') {
            setErrors((prev) => ({ ...prev, productPrice: 'Vui lòng nhập giá sản phẩm' }));
        } else {
            setStep(2);
        }
    };

    const handleSubmit = (e) => {
        for (let i = 0; i < variants.length; i++) {
            if (variants[i].color_id === '') {
                setVariants((prevVar) =>
                    prevVar.map((variant, index) =>
                        index === i ? { ...variant, error: 'Vui lòng chọn màu' } : variant,
                    ),
                );
                return;
            }
        }

        onSubmit(e);
    };

    return (
        <div className={cx('action-btns')}>
            {step === 1 ? (
                <div className={cx('step-one-btn')}>
                    <Button
                        type="button"
                        onClick={() => handleGoToStepTwo()}
                        rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                    >
                        Bước tiếp
                    </Button>
                </div>
            ) : step === 2 ? (
                <div className={cx('step-two-btn')}>
                    <Button type="button" onClick={() => setStep(1)} leftIcon={<FontAwesomeIcon icon={faArrowLeft} />}>
                        Quay lại
                    </Button>
                    <Button type="button" onClick={handleSubmit} rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                        Bước tiếp
                    </Button>
                </div>
            ) : (
                <div className={cx('step-three-btn')}>
                    {loading === false && (
                        <>
                            <Button
                                type="button"
                                onClick={continueCreateProduct}
                                leftIcon={<FontAwesomeIcon icon={faArrowLeft} />}
                            >
                                Tiếp tục tạo
                            </Button>
                            <Button
                                type="button"
                                to={config.routes.admin.productList}
                                rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                            >
                                Xem sản phẩm
                            </Button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default memo(ActionsBtns);
