import classNames from 'classnames/bind';

import styles from './Part.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const SizePicker = ({ variant }) => {
    const [show, setShow] = useState(false);

    const handleShowMenu = () => {
        setShow((prev) => !prev);
    };

    const handleAddToCart = () => {};

    return (
        <div className={cx('size-picker', { active: show })}>
            <div className={cx('size-btn')} onClick={() => handleShowMenu()}>
                <FontAwesomeIcon icon={faBagShopping} />
            </div>
            {show && (
                <div className={cx('size-menu')}>
                    <div className={cx('size-option')} onClick={handleAddToCart}>
                        S
                    </div>
                    <div className={cx('size-option')} onClick={handleAddToCart}>
                        M
                    </div>
                    <div className={cx('size-option')} onClick={handleAddToCart}>
                        L
                    </div>
                    <div className={cx('size-option')} onClick={handleAddToCart}>
                        XL
                    </div>
                    <div className={cx('size-option')} onClick={handleAddToCart}>
                        XXL
                    </div>
                </div>
            )}
        </div>
    );
};

export default SizePicker;
