import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Notifications.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faGear } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const threeLine = {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
};

const NotificationItem = ({ item }) => {
    const [read, setRead] = useState(item.read);
    let link = '/';
    let icon = <FontAwesomeIcon icon={faCartShopping} />;

    switch (item.type) {
        case 'order':
            link = '/order';
            break;
        case 'update':
            link = '/update';
            icon = <FontAwesomeIcon icon={faGear} />;
            break;
    }

    const handleClickItem = () => {
        if (!read) {
            // update database
            setRead(true);
        }
    };

    return (
        <Link to={'/'} className={cx('item')} onClick={handleClickItem}>
            <span className={cx('item-icon')}>{icon}</span>
            <div className={cx(read ? 'read' : '')}>
                <span className={cx('item-text')} style={threeLine}>
                    {item.content}
                </span>
                <span className={cx('item-time')}>{item.created_at}</span>
            </div>
        </Link>
    );
};

NotificationItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default NotificationItem;
