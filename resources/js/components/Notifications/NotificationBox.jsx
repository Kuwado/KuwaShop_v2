import { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Notifications.module.scss';
import NotificationItem from './NotificationItem';

const cx = classNames.bind(styles);

const NOTIFICATIONS = [
    {
        id: 1,
        content: 'Có một đơn đặt hàng mới 1 !!!',
        created_at: '2024-09-12 05:04:46',
        read: false,
        type: 'update',
    },
    {
        id: 2,
        content:
            'Có một đơn đặt hàng mới, đó là đơn đặt hàng gì vậy ạ. Tôi cũng không biết nữa, bạn tự tìm hiểu đi nhé!!! Chúc bạn may mắn kaka haha blabla bye bye nhaaa.',
        created_at: '2024-09-11 15:04:46',
        read: false,
        type: 'update',
    },
    {
        id: 3,
        content: 'Có một đơn đặt hàng mới 3 !!!',
        created_at: '2024-09-11 14:04:00',
        read: true,
    },
    {
        id: 4,
        content: 'Có một đơn đặt hàng mới 4 !!!',
        created_at: '2024-09-10 17:17:17',
        read: true,
        type: 'update',
    },
    {
        id: 5,
        content: 'Có một đơn đặt hàng mới 5 !!!',
        created_at: '2024-09-09 03:05:07',
        read: false,
    },
    {
        id: 6,
        content: 'Có một đơn đặt hàng mới 6 !!!',
        created_at: '2024-08-07 05:04:46',
        read: false,
    },
    {
        id: 7,
        content: 'Có một đơn đặt hàng mới 7 !!!',
        created_at: '2024-07-07 05:04:46',
        read: true,
    },
    {
        id: 8,
        content: 'Có một đơn đặt hàng mới 8 !!!',
        created_at: '2024-06-07 05:04:46',
        read: false,
    },
    {
        id: 9,
        content: 'Có một đơn đặt hàng mới 9 !!!',
        created_at: '2024-05-07 05:04:46',
        read: false,
    },
    {
        id: 10,
        content: 'Có một đơn đặt hàng mới 10 !!!',
        created_at: '2024-04-07 05:04:46',
        read: true,
    },
    {
        id: 11,
        content: 'Có một đơn đặt hàng mới 11 !!!',
        created_at: '2024-04-07 05:04:46',
        read: false,
    },
    {
        id: 12,
        content: 'Có một đơn đặt hàng mới 12 !!!',
        created_at: '2024-04-07 05:04:46',
        read: false,
    },
];

const NotificationBox = ({ items = [], classname }) => {
    const [showItems, setShowItems] = useState(items);
    const [isNotRead, setisNotRead] = useState(false);

    useEffect(() => {
        if (isNotRead) {
            const unreadItems = items.filter((item) => item.read === false || item.read === 'false');
            setShowItems(unreadItems);
        } else {
            setShowItems(items);
        }
    }, [isNotRead, showItems]);

    const renderItems = useMemo(() => {
        return showItems.map((item) => {
            return <NotificationItem key={item.id} item={item} />;
        });
    }, [showItems]);

    const handleShowAllOfNotices = () => {
        setisNotRead(false);
    };

    const handleShowNotReadNotices = () => {
        setisNotRead(true);
    };

    const classes = cx('wrapper', {
        [classname]: classname,
    });

    return (
        <div className={classes}>
            <div className={cx('box-header')}>
                <h3>Thông báo</h3>
                <div className={cx('box-header-actions')}>
                    <button
                        onClick={handleShowAllOfNotices}
                        className={cx('box-header-btn', !isNotRead ? 'active' : '')}
                    >
                        Tất cả
                    </button>
                    <button
                        onClick={handleShowNotReadNotices}
                        className={cx('box-header-btn', isNotRead ? 'active' : '')}
                    >
                        Chưa đọc
                    </button>
                </div>
            </div>
            <div className={cx('box-body')}>{renderItems}</div>
        </div>
    );
};

NotificationBox.propTypes = {
    items: PropTypes.array,
    classname: PropTypes.string,
};

export default NotificationBox;
