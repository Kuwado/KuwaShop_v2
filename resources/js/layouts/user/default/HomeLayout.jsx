import classNames from 'classnames/bind';

import styles from './UserLayout.module.scss';
import UserHeader from '../components/Header';
import Footer from '../components/Footer';

const cx = classNames.bind(styles);

const HomeLayout = ({ children }) => {
    return (
        <div className={cx('user-layout')}>
            <UserHeader />
            <div className={cx('body', 'home')}>{children}</div>
            <Footer />
        </div>
    );
};

export default HomeLayout;
