import classNames from 'classnames/bind';

import styles from './Notification.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

const Notification = ({ content, className, time = 2000 }) => {
    const [show, setShow] = useState(true);

    return (
        <div className={cx('notification', { [className]: className })}>
            <div className={cx('body')}>
                <div className={cx('content')}>{content}</div>
                <div className={cx('time-bar')} style={{ '--time-notification': `${time}ms` }}></div>
            </div>
        </div>
    );
};

export default Notification;
