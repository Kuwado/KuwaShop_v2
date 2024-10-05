import classNames from 'classnames/bind';

import styles from './Popup.module.scss';
import { IconButton } from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

const Popup = ({ isOpen, onClose, children, title }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = 'hidden';
            document.body.style.marginRight = '8px';
        } else {
            document.body.style.overflowY = 'overlay';
            document.body.style.marginRight = 'unset';
        }

        return () => {
            document.body.style.overflowY = 'overlay';
            document.body.style.marginRight = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={cx('popup')}>
            <div className={cx('header')}>
                <div className={cx('title')}>{title}</div>
                <IconButton
                    className={cx('close-btn')}
                    icon={<FontAwesomeIcon icon={faXmark} />}
                    circle
                    onClick={onClose}
                />
            </div>
            <div className={cx('content')}>{children}</div>
        </div>
    );
};

export default Popup;
