import classNames from 'classnames/bind';

import styles from './UserHeader.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
import images from '~/assets/images';
import { Image } from '~/components/Image';
import Categories from './Part/Categories';
import Search from './Part/Search';
import UserMenu from './Part/UserMenu';
import PreviewCart from './Part/PreviewCart';
import { ThemeButon } from '~/components/Button';

const cx = classNames.bind(styles);

const UserHeader = () => {
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
                        <UserMenu />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default UserHeader;
