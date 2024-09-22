import classNames from 'classnames/bind';

import styles from './Part.module.scss';

const cx = classNames.bind(styles);

const StepHeader = ({ step, setStep }) => {
    return (
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
    );
};

export default StepHeader;
