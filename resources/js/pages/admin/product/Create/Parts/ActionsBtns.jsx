import { useCallback, memo } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Parts.module.scss';
import config from '~/config';
import { Button } from '~/components/Button';

const cx = classNames.bind(styles);

const ActionsBtns = ({ step, loading, setStep, setNext, continueCreateProduct }) => {
    return (
        <div className={cx('action-btns')}>
            {step === 1 ? (
                <div className={cx('step-one-btn')}>
                    <Button
                        type="button"
                        onClick={() => setNext(true)}
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
                    <Button
                        type="button"
                        onClick={() => setNext(true)}
                        rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                    >
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
