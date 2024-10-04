import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.scss';
import classNames from 'classnames/bind';
import StepOne from '../Create/StepOne/StepOne';
import Content from '~/common/Content';
import config from '~/config';
import StepTwo from '../Create/StepTwo/StepTwo';

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

function AdminProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [variants, setVariants] = useState([
        {
            s: '',
            m: '',
            l: '',
            xl: '',
            xxl: '',
            images: [],
            image_paths: '',
            color_id: '',
            error: '',
        },
    ]);
    const [categoryName, setCategoryName] = useState('');
    const [saleType, setSaleType] = useState('');
    const [errors, setErrors] = useState({
        productName: '',
        productCategory: '',
        productPrice: '',
        fetch: '',
        variantColor: '',
    });
    const [loading, setLoading] = useState(true);
    console.log(product);
    console.log(variants);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/api/product?id=${id}`);
                if (response.status === 200) {
                    setProduct(response.data.product);
                    setVariants(response.data.variants);
                    setCategoryName(response.data.category.name);
                    setSaleType(response.data.sale_type);
                    console.log(response.data);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, []);

    return (
        <Content breadcrumb={BREADCRUMB}>
            <div className={cx('product-detail')}>
                <div className={cx('product')}>
                    {!loading && (
                        <StepOne
                            product={product}
                            categoryName={categoryName}
                            saleType={saleType}
                            errors={errors}
                            setProduct={setProduct}
                            setCategoryName={setCategoryName}
                            setSaleType={setSaleType}
                            setErrors={setErrors}
                        />
                    )}
                </div>

                <h3 className={cx('variant-title')}>Các mẫu mã</h3>

                <div className={cx('variants')}>
                    <StepTwo variants={variants} setVariants={setVariants} showImages={true} />
                </div>
            </div>
        </Content>
    );
}

export default AdminProductDetail;
