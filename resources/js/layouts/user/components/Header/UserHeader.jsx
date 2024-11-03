import classNames from 'classnames/bind';

import styles from './UserHeader.module.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import config from '~/config';
import images from '~/assets/images';
import { Image } from '~/components/Image';
import Categories from './Part/Categories';
import Search from './Part/Search';
import UserMenu from './Part/UserMenu';
import PreviewCart from './Part/PreviewCart';
import { IconButton, ThemeButon } from '~/components/Button';
import { useContext } from 'react';
import { AuthContext } from '~/context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const UserHeader = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = () => {
        localStorage.setItem('nextUrl', location.pathname);
        navigate(config.routes.other.login);
    };

    return (
        <header className={cx('header')}>
            <div className={cx('content')}>
                <div className={cx('content-left')}>
                    <Link to={config.routes.user.home} className={cx('logo')}>
                        <Image src={images.logo} alt="kuwashop" width="100%" height="100%" />
                    </Link>

                    <Categories />
                </div>

                <div className={cx('content-right')}>
                    <Search />
                    <div className={cx('actions')}>
                        <ThemeButon />
                        <PreviewCart />
                        {isAuthenticated ? (
                            <UserMenu />
                        ) : (
                            <IconButton
                                icon={<FontAwesomeIcon icon={faUser} />}
                                content="Đăng nhập"
                                onClick={handleLogin}
                            />
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default UserHeader;
