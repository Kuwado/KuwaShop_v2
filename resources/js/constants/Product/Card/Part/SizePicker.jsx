import classNames from 'classnames/bind';

import styles from './Part.module.scss';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '~/hooks/useCart';

const cx = classNames.bind(styles);

const SizePicker = ({ variant }) => {
    const { handleAddToCart } = useCart();
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

    const addItemToCart = async (size) => {
        await handleAddToCart(variant.id, size, 1);
    };

    return (
        <div className={cx('size-picker')} ref={pickerRef}>
            <div className={cx('size-btn')} onClick={() => handleShowMenu()}>
                <FontAwesomeIcon icon={faBagShopping} />
            </div>
            {/* {show && ( */}
            <div className={cx('size-menu')}>
                <div className={cx('size-option', { disabled: variant.s === 0 })} onClick={() => addItemToCart('s')}>
                    S
                </div>
                <div className={cx('size-option', { disabled: variant.m === 0 })} onClick={() => addItemToCart('m')}>
                    M
                </div>
                <div className={cx('size-option', { disabled: variant.l === 0 })} onClick={() => addItemToCart('l')}>
                    L
                </div>
                <div className={cx('size-option', { disabled: variant.xl === 0 })} onClick={() => addItemToCart('xl')}>
                    XL
                </div>
                <div
                    className={cx('size-option', { disabled: variant.xxl === 0 })}
                    onClick={() => addItemToCart('xxl')}
                >
                    XXL
                </div>
            </div>
        </div>
    );
};

export default SizePicker;
