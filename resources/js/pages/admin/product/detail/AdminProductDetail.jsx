import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.scss';
import classNames from 'classnames/bind';
import StepOne from '../Create/Steps/StepOne';
import Content from '~/common/Content';
import config from '~/config';
import StepTwo from '../Create/Steps/StepTwo';
import useProduct from '~/hooks/useProduct';
import useVariants from '~/hooks/useVariants';
import { deleteProduct, getProduct, updateProduct } from '~/services/productService';
import { getVariants, updateVariant } from '~/services/variantService';
import LoadingPage from '~/pages/other/Loading';
import { Button } from '~/components/Button';
import { Notification } from '~/components/Notification';

const cx = classNames.bind(styles);

const BREADCRUMB = [
    {
        title: 'Trang chủ',
        link: config.routes.admin.dashboard,
    },
    {
        title: 'Sản phẩm - Danh sách',
        link: config.routes.admin.productList,
    },
    {
        title: 'Chi tiết',
    },
];

const AdminProductDetail = () => {
    const { id } = useParams();
    const { product, setProduct, setProductField } = useProduct({});
    const { variants, setVariants, deleteVariantField } = useVariants([]);
    const [next, setNext] = useState({
        product: '',
        variants: '',
    });
    const [notification, setNotification] = useState({
        delete: false,
        update: false,
        time: 2000,
    });
    const [loading, setLoading] = useState(true);

    const fetchProductData = async () => {
        try {
            const [productRes, variantsRes] = await Promise.all([getProduct(id), getVariants(id)]);
            setProduct(productRes.product);
            setVariants(variantsRes.variants);
        } catch (error) {
            console.log('Lỗi fetch dữ liệu sản phẩm: ', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProductData();
    }, [id]);

    const updateProductAndVariants = async () => {
        await updateProduct(product);
        setProductField('image_file', '');
        await Promise.all(
            variants.map(async (variant, index) => {
                await updateVariant(variant);
                deleteVariantField('image_files', index);
            }),
        );

        handleShowNotification('update', reset);
    };

    useEffect(() => {
        if (next.product === false && next.variants === false) {
            updateProductAndVariants();
        }
    }, [next]);

    const reset = () => {
        setNext({
            product: '',
            variants: '',
        });
        setNotification({
            delete: false,
            update: false,
            time: 2000,
        });
    };

    const handleShowNotification = (type, fn) => {
        setNotification((prev) => ({ ...prev, [type]: true }));
        setTimeout(() => {
            setNotification((prev) => ({ ...prev, [type]: false }));
            fn();
        }, notification.time);
    };

    const handleUpdateProduct = () => {
        setNext({ product: true, variants: true });
    };

    const handleDeleteProduct = async () => {
        const isConfirmed = window.confirm('Bạn có chắc muốn xóa sản phẩm');
        if (isConfirmed) {
            try {
                await deleteProduct(product.id);
            } catch (error) {
                console.log('Lỗi xóa sản phẩm: ', error);
            } finally {
                handleShowNotification('delete', reset);
            }
        }
    };

    return (
        <Content breadcrumb={BREADCRUMB}>
            {notification.update && <Notification content="Cập nhật thành công" time={notification.time} />}
            {notification.delete && <Notification content="Xóa thành công" time={notification.time} />}

            {!loading ? (
                <div className={cx('product-detail')}>
                    <div className={cx('product-title')}>
                        <h3>
                            <span>Thông tin sản phẩm</span>
                            <span>{product.sku && ` - ${product.sku}`}</span>
                        </h3>
                        <h3>Đã bán: {product.sold_quantity} sản phẩm</h3>
                    </div>

                    <div className={cx('product')}>
                        {!loading && (
                            <StepOne
                                initialProduct={product}
                                onSubmit={setProduct}
                                next={next.product}
                                setNext={(value) => setNext((prev) => ({ ...prev, product: value }))}
                            />
                        )}
                    </div>

                    <h3 className={cx('variant-title')}>Các mẫu mã</h3>

                    <div className={cx('variants')}>
                        <StepTwo
                            initialVariants={variants}
                            onSubmit={setVariants}
                            next={next.variants}
                            setNext={(value) => setNext((prev) => ({ ...prev, variants: value }))}
                            sold
                        />
                    </div>

                    <div className={cx('action-btns')}>
                        <Button primary onClick={handleUpdateProduct}>
                            Cập nhật
                        </Button>
                        <Button danger onClick={handleDeleteProduct}>
                            Xóa sản phẩm
                        </Button>
                    </div>
                </div>
            ) : (
                <LoadingPage />
            )}
        </Content>
    );
};

export default AdminProductDetail;
