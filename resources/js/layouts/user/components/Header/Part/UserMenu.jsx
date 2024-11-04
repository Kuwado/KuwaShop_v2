import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia, faCircleQuestion, faKeyboard, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import styles from './Part.module.scss';
import images from '~/assets/images';
import { Image } from '~/components/Image';
import Menu from '~/components/Menu';
import { useContext, useEffect } from 'react';
import { AuthContext } from '~/context/AuthContext';

const cx = classNames.bind(styles);

const USER_MENU = [
    {
        leftIcon: <FontAwesomeIcon icon={faEarthAsia} />,
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
        leftIcon: <FontAwesomeIcon icon={faCircleQuestion} />,
        content: 'Feedback and Help',
        to: '/feedback',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faKeyboard} />,
        content: 'Keyboard shortcuts',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        content: 'Đăng xuất',
        type: 'logout',
    },
];

const UserMenu = () => {
    const { handleLogout, profile } = useContext(AuthContext);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                console.log('lang');
                break;
            case 'logout':
                handleLogout();
            default:
        }
    };

    const header = () => {
        return (
            <div>
                <span>Xin chào, </span>
                <span>
                    {profile.first_name} {profile.last_name}
                </span>
            </div>
        );
    };

    return (
        <div className={cx('avatar')}>
            <Menu items={USER_MENU} onClick={handleMenuChange} header={header()} click>
                <Image
                    className={cx('avatar-image')}
                    src={profile.avatar ?? images.noImage}
                    alt="avatar"
                    width="100%"
                    height="100%"
                />
            </Menu>
        </div>
    );
};

export default UserMenu;
