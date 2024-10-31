import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct, getProducts } from '~/services/productService';
import { getVariant } from '~/services/variantService';
import classNames from 'classnames/bind';

import styles from './ProductDetail.module.scss';
import LoadingPage from '~/pages/other/Loading';
import ImageSlider from './ImageSlider';
import Content from '~/common/Content';
import config from '~/config';
import images from '~/assets/images';
import InfoDetail from './InfoDetail';
import { CardCollection } from '~/constants/Product';

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

const ProductDetail = () => {
    const { productId, variantId } = useParams();
    const [product, setProduct] = useState({});
    const [variant, setVariant] = useState({});
    const [similar, setSimilar] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(product);
    console.log(similar);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await getProduct(productId);
                setProduct(response.product);
            } catch (error) {
                console.log('Lỗi fetch dữ liệu sản phẩm: ', error);
            } finally {
                setLoading(false);
            }
        };

        const fetchSimilarProduct = async () => {
            try {
                setLoading(true);
                const response = await getProducts('new', 1, product.category_id);
                setSimilar(response.products.data);
            } catch (error) {
                console.log('Lỗi fetch dữ liệu sản phẩm: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
        fetchSimilarProduct();
    }, [productId]);

    useEffect(() => {
        const fetchVariant = async () => {
            try {
                setLoading(true);
                const response = await getVariant(variantId);
                setVariant(response.variant);
            } catch (error) {
                console.log('Lỗi fetch dữ liệu biến thể: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchVariant();
    }, [variantId]);

    return (
        <Content breadcrumb={BREADCRUMB}>
            {loading && <LoadingPage height="100vh" />}
            {!loading && (
                <div className={cx('product-detail')}>
                    <div className={cx('content')}>
                        <div className={cx('content-left')}>
                            <ImageSlider images={variant.images ?? [images.noImage]} />
                        </div>
                        <div className={cx('content-right')}>
                            <InfoDetail product={product} variant={variant} />
                        </div>
                    </div>

                    <div className={cx('similar')}>
                        <CardCollection title="Sản phẩm tương tự" collection={similar} />
                    </div>
                </div>
            )}
        </Content>
    );
};

export default ProductDetail;
