import classNames from 'classnames/bind';

import styles from './AdminProductCreate.module.scss';
import Content from '~/common/Content/Content';
import config from '~/config';
import Input from '~/components/Input';

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
    return (
        <Content breadcrumb={BREADCRUMB}>
            <div className={cx('product-create')}>
                <div className={cx('left')}>
                    <Input
                        name="name"
                        label="Tên sản phẩm"
                        placeholder="Hãy nhập tên sản phẩm"
                        required
                        note="Tên sản phẩm thích nhập gì cũng được nha. Bạn thích là được"
                    />
                </div>
                <div className={cx('right')}></div>
            </div>
        </Content>
    );
};

export default AdminProductCreate;
