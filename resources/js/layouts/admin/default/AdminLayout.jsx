import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './AdminLayout.module.scss';
import Header from '~/common/Header';
import Sidebar from '~/common/Sidebar';
import config from '~/config';
import Breadcrumb from '~/common/Breadcrumb';

const cx = classNames.bind(styles);

const ITEMS = [
    {
        type: 'dashboard',
        title: 'Trang chủ',
        to: config.routes.admin.dashboard,
    },
    {
        type: 'product',
        title: 'Sản phẩm',
        children: [
            {
                type: 'product_create',
                title: 'Thêm mới',
                to: config.routes.admin.productCreate,
            },
            {
                type: 'product_list',
                title: 'Danh sách',
                to: config.routes.admin.productList,
            },
        ],
    },
    {
        type: 'customers',
        title: 'Khách hàng',
        to: config.routes.admin.customers,
    },
    {
        type: 'revenue',
        title: 'Doanh thu',
        to: config.routes.admin.productDetail,
    },
];

function AdminLayout({ children }) {
    return (
        <div className={cx('admin-layout')}>
            <Header />
            <div className={cx('body')}>
                <div className={cx('body-left')}>
                    <Sidebar items={ITEMS} />
                </div>
                <div className={cx('body-right')}>{children}</div>
            </div>
            <div className={cx('footer')}></div>
        </div>
    );
}

AdminLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AdminLayout;
