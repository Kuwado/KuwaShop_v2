import classNames from 'classnames/bind';

import styles from './SizeOptions.module.scss';

const cx = classNames.bind(styles);

const SizeOptions = ({ variant, selectedSize, handleChooseSize }) => {
    return (
        <div className={cx('size-options')}>
            <button
                type="button"
                className={cx('size-btn', { disabled: variant.s === 0, active: selectedSize === 's' })}
                onClick={() => handleChooseSize('s')}
            >
                S
            </button>
            <button
                type="button"
                className={cx('size-btn', { disabled: variant.m === 0, active: selectedSize === 'm' })}
                onClick={() => handleChooseSize('m')}
            >
                M
            </button>
            <button
                type="button"
                className={cx('size-btn', { disabled: variant.l === 0, active: selectedSize === 'l' })}
                onClick={() => handleChooseSize('l')}
            >
                L
            </button>
            <button
                type="button"
                className={cx('size-btn', { disabled: variant.xl === 0, active: selectedSize === 'xl' })}
                onClick={() => handleChooseSize('xl')}
            >
                XL
            </button>
            <button
                type="button"
                className={cx('size-btn', { disabled: variant.xxl === 0, active: selectedSize === 'xxl' })}
                onClick={() => handleChooseSize('xxl')}
            >
                XXL
            </button>
        </div>
    );
};

export default SizeOptions;
