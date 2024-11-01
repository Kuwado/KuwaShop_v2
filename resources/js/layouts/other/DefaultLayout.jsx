import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
    return <div className={cx('other-layout')}>{children}</div>;
};

export default DefaultLayout;
