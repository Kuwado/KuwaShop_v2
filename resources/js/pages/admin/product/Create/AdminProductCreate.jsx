import classNames from 'classnames/bind';

import styles from './AdminProductCreate.module.scss';
import Content from '~/common/Content/Content';
import config from '~/config';
import { Input } from '~/components/Input';
import RadioBox from '~/components/Radio';

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

const a = {
    i: <div>ff</div>,
};

const AdminProductCreate = () => {
    console.log(a.i);
    return (
        <Content breadcrumb={BREADCRUMB}>
            <div className={cx('product-create')}>
                <div className={cx('left')}>
                    <Input
                        name="name"
                        label="Tên sản phẩm"
                        required
                        note="Tên sản phẩm thích nhập gì cũng được nha. Bạn thích là được"
                    />
                    <Input name="original_price" label="Giá sản phẩm" required type="number" />

                    <RadioBox classname={cx('radioo')} />

                    <Input name="price" label="Giá sản phẩm" required type="number" />
                    <Input
                        name="name"
                        label="Tên sản phẩm"
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
