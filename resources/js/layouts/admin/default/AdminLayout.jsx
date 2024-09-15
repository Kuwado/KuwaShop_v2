import classNames from 'classnames/bind';

import styles from './AdminLayout.module.scss';
import Header from '~/common/Header';
import Sidebar from '~/common/Sidebar';

const cx = classNames.bind(styles);

function AdminLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>
                <div className={cx('content-left')}>
                    <Sidebar />
                </div>
                <div className={cx('content-right')}>{children}</div>
            </div>
        </div>
    );
}

export default AdminLayout;
