import classNames from 'classnames/bind';

import styles from './List.module.scss';
import Content from '~/common/Content';
import config from '~/config';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './Table/Table';
import Pagination from '~/common/Pagination';
import ListHeader from './Part/ListHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

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
    const [loading, setLoading] = useState(false);
    console.log(products);

    const fetchProducts = async (typeP, pageP) => {
        setLoading(true);
        try {
            const response = await axios.get(`/api/products/${typeP}?page=${pageP}`);
            setProducts(response.data.products.data);
            setTotalPage(response.data.products.last_page);
        } catch (error) {
            console.log('Không thể lấy được dữ liệu sản phẩm', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts(type, 1);
        setPage(1);
        window.scrollTo(0, 0);
    }, [type]);

    useEffect(() => {
        fetchProducts(type, page);
        window.scrollTo(0, 0);
    }, [page]);

    const handleDeleteProduct = async (id) => {
        const confirmDelete = window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?');
        if (confirmDelete) {
            try {
                const response = await axios.delete(`/api/product/${id}`);
                if (response.status === 200) {
                    fetchProducts(type, page);
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
                {loading ? (
                    <div className={cx('waiting')}>
                        <div className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </div>
                        <h4>Vui lòng chờ</h4>
                    </div>
                ) : (
                    <Table products={products} handleDeleteProduct={handleDeleteProduct} />
                )}
                <Pagination current={page} total={totalPage} setPage={setPage} />
            </div>
        </Content>
    );
}

export default AdminProductList;
