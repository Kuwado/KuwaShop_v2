import classNames from 'classnames/bind';

import styles from './List.module.scss';
import Content from '~/common/Content';
import config from '~/config';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './Table/Table';
import Pagination from '~/common/Pagination';
import ListHeader from './Part/ListHeader';

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
    const [type, setType] = useState('old');
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    console.log(products);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`/api/products/${type}`);
            setProducts(response.data.products);
        } catch (error) {
            console.log('Không thể lấy được dữ liệu sản phẩm', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [type]);

    const handleDeleteProduct = async (id) => {
        const confirmDelete = window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?');
        if (confirmDelete) {
            try {
                const response = await axios.delete(`/api/product/${id}`);
                if (response.status === 200) {
                    fetchProducts();
                }
            } catch (error) {
                console.log('Không thể lấy được dữ liệu sản phẩm', error);
            }
        } else {
            console.log('huy');
            return;
        }
    };

    return (
        <Content breadcrumb={BREADCRUMB}>
            <div className={cx('admin-product-list')}>
                <ListHeader type={type} setType={setType} />
                <Table products={products} handleDeleteProduct={handleDeleteProduct} />
                {/* <Pagination current={page} total={totalPage} /> */}
            </div>
        </Content>
    );
}

export default AdminProductList;
