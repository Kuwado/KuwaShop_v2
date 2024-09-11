import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLaptop,
    faSignIn,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUpload,
    faMessage,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Menu from '~/components/Menu';

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

const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
        case 'language':
            //
            break;
        default:
    }
};

const Header = () => {
    const [currentUser, setCurrentUser] = useState(false);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <Image src={images.logo} alt="kuwashop" width="100%" height="100%" />
                </div>

                {/* search */}

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            {/* user */}
                            <div></div>
                        </>
                    ) : (
                        <>
                            <Menu items={ADMIN_MENU} onChange={handleMenuChange}>
                                <div className={cx('avatar')}>
                                    <Image
                                        classname={cx('avatar-image')}
                                        src={images.avatar}
                                        alt="avatar"
                                        width="100%"
                                        height="100%"
                                    />
                                </div>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
