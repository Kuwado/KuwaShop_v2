import classNames from 'classnames/bind';

import styles from './List.module.scss';
import Content from '~/common/Content';
import config from '~/config';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './Table/Table';

const cx = classNames.bind(styles);

const BREADCRUMB = [
    {
        title: 'Trang chủ',
        link: config.routes.admin.dashboard,
    },
    {
        title: 'Sản phẩm - Danh sách sản phẩm',
        link: config.routes.admin.productList,
    },
];

function AdminProductList() {
    const [products, setProducts] = useState([]);
    console.log(products);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data.products);
            } catch (error) {
                console.log('Không thể lấy được dữ liệu sản phẩm', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <Content breadcrumb={BREADCRUMB}>
            <div className={cx('admin-product-list')}>
                <Table products={products} />
            </div>
        </Content>
    );
}

export default AdminProductList;
