import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Part.module.scss';
import { Button } from '~/components/Button';

const cx = classNames.bind(styles);

const ActionsBtns = ({ step, setStep }) => {
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
                    <Button type="button" onClick={() => setStep(2)} leftIcon={<FontAwesomeIcon icon={faArrowLeft} />}>
                        Quay lại
                    </Button>
                </div>
            )}
        </div>
    );
};

export default ActionsBtns;
