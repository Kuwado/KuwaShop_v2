import classNames from 'classnames/bind';

import styles from './AdminProductCreate.module.scss';
import Content from '~/common/Content/Content';
import config from '~/config';

const cx = classNames.bind(styles);

const BREADCRUMB = [
    {
        title: 'Trang chủ',
        link: config.routes.admin.dashboard,
    },
    {
        title: 'Sản phẩm - Thêm mới',
        link: config.routes.admin.productCreate,
    },
];

const AdminProductCreate = () => {
    return <Content breadcrumb={BREADCRUMB}>Admin</Content>;
};

export default AdminProductCreate;
