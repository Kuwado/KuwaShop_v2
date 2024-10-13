import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './List.module.scss';
import Content from '~/common/Content';
import config from '~/config';
import Table from './Table/Table';
import Pagination from '~/common/Pagination';
import ListHeader from './Part/ListHeader';
import LoadingPage from '~/pages/other/Loading';
import { deleteProduct, getProducts } from '~/services/productService';
import { Notification } from '~/components/Notification';

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

const AdminProductList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const type = searchParams.get('type') || 'new';
    const page = parseInt(searchParams.get('page')) || 1;
    const [totalPage, setTotalPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState(false);

    const fetchProducts = async (typeP, pageP) => {
        setLoading(true);
        try {
            const response = await getProducts(typeP, pageP);
            setProducts(response.products.data);
            setTotalPage(response.products.meta.last_page);
        } catch (error) {
            console.log('Không thể lấy được dữ liệu sản phẩm', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts(type, page);
        window.scrollTo(0, 0);
    }, [type, page]);

    const handleDeleteProduct = async (id) => {
        const confirmDelete = window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?');
        if (confirmDelete) {
            await deleteProduct(id);
            setNotification(true);
            setTimeout(() => {
                setNotification(false);
                fetchProducts(type, page);
            }, 2000);
        }
    };

    const handleTypeChange = (newType) => {
        setSearchParams({ type: newType, page: 1 });
    };

    const handlePageChange = (newPage) => {
        setSearchParams({ type: type, page: newPage });
    };

    return (
        <Content breadcrumb={BREADCRUMB}>
            <div className={cx('admin-product-list')}>
                {notification && <Notification content="Xóa thành công sản phẩm" />}{' '}
                <ListHeader type={type} setType={handleTypeChange} />
                {loading ? <LoadingPage /> : <Table products={products} handleDeleteProduct={handleDeleteProduct} />}
                <Pagination current={page} total={totalPage} setPage={handlePageChange} />
            </div>
        </Content>
    );
};

export default AdminProductList;
