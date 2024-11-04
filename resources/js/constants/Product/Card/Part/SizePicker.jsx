import classNames from 'classnames/bind';

import styles from './Part.module.scss';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const SizePicker = ({ variant }) => {
    const pickerRef = useRef(null);

    const handleShowMenu = () => {
        if (pickerRef.current.classList.contains(cx('active'))) {
            pickerRef.current.classList.remove(cx('active'));
        } else {
            const pickers = document.querySelectorAll(`.${cx('size-picker')}`);
            pickers.forEach((picker) => {
                picker.classList.remove(cx('active'));
            });
            pickerRef.current.classList.add(cx('active'));
        }
    };

    const handleAddToCart = () => {};

    return (
        <div className={cx('size-picker')} ref={pickerRef}>
            <div className={cx('size-btn')} onClick={() => handleShowMenu()}>
                <FontAwesomeIcon icon={faBagShopping} />
            </div>
            {/* {show && ( */}
            <div className={cx('size-menu')}>
                <div className={cx('size-option', { disabled: variant.s === 0 })} onClick={handleAddToCart}>
                    S
                </div>
                <div className={cx('size-option', { disabled: variant.m === 0 })} onClick={handleAddToCart}>
                    M
                </div>
                <div className={cx('size-option', { disabled: variant.l === 0 })} onClick={handleAddToCart}>
                    L
                </div>
                <div className={cx('size-option', { disabled: variant.xl === 0 })} onClick={handleAddToCart}>
                    XL
                </div>
                <div className={cx('size-option', { disabled: variant.xxl === 0 })} onClick={handleAddToCart}>
                    XXL
                </div>
            </div>
        </div>
    );
};

export default SizePicker;
