import { useState } from 'react';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia, faCircleQuestion, faKeyboard } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import config from '~/config';
import images from '~/assets/images';
import Image from '~/components/Image';
import Menu from '~/components/Menu';
import { NotificationWithIcon } from '~/components/Notifications';
import { MessageWithIcon } from '~/components/Messages';
import Search from '../../components/Search/Search';
import ThemeButon from '~/components/Button/Theme/ThemeButon';

const cx = classNames.bind(styles);

const ADMIN_MENU = [
    {
        rightIcon: <FontAwesomeIcon icon={faEarthAsia} />,
        content: 'Tieng Viet',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    content: 'English',
                    children: {
                        title: 'Language',
                        data: [
                            {
                                type: 'language',
                                code: 'en',
                                content: 'English 2',
                            },
                            {
                                type: 'language',
                                code: 'vi',
                                content: 'Tiếng Việt 2',
                            },
                        ],
                    },
                },
                {
                    code: 'vi',
                    content: 'Tiếng Việt',
                },
                {
                    code: 'vi',
                    content: 'Tiếng Việt',
                },
                {
                    code: 'vi',
                    content: 'Tiếng Việt',
                },
                {
                    code: 'vi',
                    content: 'Tiếng Việt',
                },
                {
                    code: 'vi',
                    content: 'Tiếng Việt',
                },
                {
                    code: 'vi',
                    content: 'Tiếng Việt',
                },
                {
                    code: 'vi',
                    content: 'Tiếng Việt',
                },
                {
                    code: 'vi',
                    content: 'Tiếng Việt',
                },
                {
                    code: 'vi',
                    content: 'Tiếng Việt',
                },
                {
                    code: 'vi',
                    content: 'Tiếng Việt',
                },
                {
                    code: 'vi',
                    content: 'Tiếng Việt',
                },
                {
                    code: 'vi',
                    content: 'Tiếng Việt',
                },
                {
                    code: 'vi',
                    content: 'Tiếng Việt',
                },
                {
                    code: 'vi',
                    content: 'Tiếng Việt',
                },
                {
                    code: 'vi',
                    content: 'Tiếng Việt',
                },
                {
                    code: 'vi',
                    content: 'Tiếng Việt',
                },
                {
                    code: 'vi',
                    content: 'Tiếng Việt',
                },
                {
                    code: 'vi',
                    content: 'Tiếng Việt',
                },
                {
                    code: 'vi',
                    content: 'Tiếng Việt',
                },
                {
                    code: 'vi',
                    content: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        content: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        content: 'Keyboard shortcuts',
    },
];

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
    {
        id: 13,
        content: 'Có một đơn đặt hàng mới 13 !!!',
        created_at: '2024-04-07 05:04:46',
        read: false,
    },
    {
        id: 14,
        content: 'Có một đơn đặt hàng mới 14 !!!',
        created_at: '2024-04-07 05:04:46',
        read: false,
    },
    {
        id: 15,
        content: 'Có một đơn đặt hàng mới 15 !!!',
        created_at: '2024-04-07 05:04:46',
        read: false,
    },
];

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

const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
        case 'language':
            console.log('lang');
            break;
        default:
    }
};

const customHeader = (
    <div className={cx('custom-header')}>
        <p>Custom Header Content</p>
    </div>
);

const Header = () => {
    const [currentUser, setCurrentUser] = useState(false);

    return (
        <header className={cx('header')}>
            <div className={cx('content')}>
                <Link to={config.routes.admin.dashboard} className={cx('logo')}>
                    <Image src={images.logo} alt="kuwashop" width="100%" height="100%" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            {/* user */}
                            <div></div>
                        </>
                    ) : (
                        <>
                            <ThemeButon />

                            <MessageWithIcon items={MESSAGES} />

                            <NotificationWithIcon items={NOTIFICATIONS} />

                            <div className={cx('avatar')}>
                                <Menu items={ADMIN_MENU} onClick={handleMenuChange} click>
                                    <Image
                                        classname={cx('avatar-image')}
                                        src={images.avatar}
                                        alt="avatar"
                                        width="100%"
                                        height="100%"
                                    />
                                </Menu>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
