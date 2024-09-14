import { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Messages.module.scss';
import MessageItem from './MessageItem';
import images from '~/assets/images';
import Image from '../Image';
import { Button } from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const MESSAGES = [
    {
        id: 1,
        from: 'Lưu Việt Hoàn',
        avatar: images.avatarTest,
        content: 'Có một đơn đặt hàng mới 1 !!!',
        created_at: '8 giờ',
        read: false,
        type: 'update',
    },
    {
        id: 2,
        from: 'Lưu Việt Hoàn',
        avatar: images.avatarTest,
        content:
            'Có một đơn đặt hàng mới, đó là đơn đặt hàng gì vậy ạ. Tôi cũng không biết nữa, bạn tự tìm hiểu đi nhé!!! Chúc bạn may mắn kaka haha blabla bye bye nhaaa.',
        created_at: '8 giờ',
        read: false,
        type: 'update',
    },
    {
        id: 3,
        from: 'Lưu Việt Hoàn',
        avatar: images.avatarTest,
        content: 'Có một đơn đặt hàng mới 3 !!!',
        created_at: '8 giờ',
        read: true,
    },
    {
        id: 4,
        from: 'Lưu Việt Hoàn',
        avatar: images.avatarTest,
        content: 'Có một đơn đặt hàng mới 4 !!!',
        created_at: '8 giờ',
        read: true,
        type: 'update',
    },
    {
        id: 5,
        from: 'Lưu Việt Hoàn',
        avatar: images.avatarTest,
        content: 'Có một đơn đặt hàng mới 5 !!!',
        created_at: '8 giờ',
        read: false,
    },
    {
        id: 6,
        from: 'Lưu Việt Hoàn',
        avatar: images.avatarTest,
        content: 'Có một đơn đặt hàng mới 6 !!!',
        created_at: '8 giờ',
        read: false,
    },
    {
        id: 7,
        from: 'Lưu Việt Hoàn',
        avatar: images.avatarTest,
        content: 'Có một đơn đặt hàng mới 7 !!!',
        created_at: '8 giờ',
        read: true,
    },
    {
        id: 8,
        from: 'Lưu Việt Hoàn',
        avatar: images.avatarTest,
        content: 'Có một đơn đặt hàng mới 8 !!!',
        created_at: '8 giờ',
        read: false,
    },
    {
        id: 9,
        from: 'Lưu Việt Hoàn',
        avatar: images.avatarTest,
        content: 'Có một đơn đặt hàng mới 9 !!!',
        created_at: '8 giờ',
        read: false,
    },
    {
        id: 10,
        from: 'Lưu Việt Hoàn',
        avatar: images.avatarTest,
        content: 'Có một đơn đặt hàng mới 10 !!!',
        created_at: '8 giờ',
        read: true,
    },
    {
        id: 11,
        from: 'Lưu Việt Hoàn',
        avatar: images.avatarTest,
        content: 'Có một đơn đặt hàng mới 11 !!!',
        created_at: '8 giờ',
        read: false,
    },
    {
        id: 12,
        from: 'Lưu Việt Hoàn',
        avatar: images.avatarTest,
        content: 'Có một đơn đặt hàng mới 12 !!!',
        created_at: '8 giờ',
        read: false,
    },
];

const MessageBox = ({ items = MESSAGES, classname }) => {
    const [isNotRead, setisNotRead] = useState(false);

    const renderItems = () => {
        return items.map((item) => {
            return <MessageItem key={item.id} item={item} />;
        });
    };

    const classes = cx('wrapper', {
        [classname]: classname,
    });

    return (
        <div className={classes}>
            <div className={cx('box-header')}>
                <h3>Tin nhắn</h3>
                <div className={cx('box-header-search')}>
                    <input
                        className={cx('box-header-input')}
                        type="text"
                        placeholder="Bạn muốn tìm gì?"
                        spellCheck={false}
                    />
                    <button className={cx('box-header-search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>
            <div className={cx('box-body')}>{renderItems()}</div>
            <div className={cx('box-footer')}>
                <Button curved>Xem tất cả</Button>
            </div>
        </div>
    );
};

MessageBox.propTypes = {
    items: PropTypes.array,
    classname: PropTypes.string,
};

export default MessageBox;
