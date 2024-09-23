import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Part.module.scss';
import { Button } from '~/components/Button';
import config from '~/config';

const cx = classNames.bind(styles);

const ActionsBtns = ({ step, setStep, handleSubmit, continueCreateProduct }) => {
    return (
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
                    <Button type="button" onClick={() => setStep(1)} leftIcon={<FontAwesomeIcon icon={faArrowLeft} />}>
                        Quay lại
                    </Button>
                    <Button type="button" onClick={handleSubmit} rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                        Bước tiếp
                    </Button>
                </div>
            ) : (
                <div className={cx('step-three-btn')}>
                    <Button
                        type="button"
                        onClick={continueCreateProduct}
                        leftIcon={<FontAwesomeIcon icon={faArrowLeft} />}
                    >
                        Tiếp tục tạo
                    </Button>
                    <Button
                        type="button"
                        to={config.routes.admin.dashboard}
                        rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                    >
                        Về trang chủ
                    </Button>
                </div>
            )}
        </div>
    );
};

export default ActionsBtns;
