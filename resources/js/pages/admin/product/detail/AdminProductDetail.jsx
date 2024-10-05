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
import { getProduct } from '~/services/productService';
import { getVariants } from '~/services/variantService';
import LoadingPage from '~/pages/other/Loading';

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
    const { product, setProduct } = useProduct({});
    const { variants, setVariants } = useVariants([]);

    console.log(product);
    console.log(variants);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await getProduct(id);
            console.log(response);
            setProduct(response.product);
        };

        const fetchVariants = async () => {
            const response = await getVariants(id);
            console.log(response.variants);
            setVariants(response.variants);
        };

        fetchProduct();
        fetchVariants();

        Promise.all([fetchProduct(), fetchVariants()]).finally(() => {
            setLoading(false);
        });
    }, []);

    return (
        <Content breadcrumb={BREADCRUMB}>
            {!loading ? (
                <div className={cx('product-detail')}>
                    <div className={cx('product')}>
                        {!loading && (
                            <StepOne
                                initialProduct={product}
                                // onSubmit={handleSubmitProduct}
                                // next={next}
                                // setNext={setNext}
                            />
                        )}
                    </div>

                    <h3 className={cx('variant-title')}>Các mẫu mã</h3>

                    <div className={cx('variants')}>
                        {/* onSubmit={handleSubmitVariants} next={next} setNext={setNext} */}
                        <StepTwo initialVariants={variants} />
                    </div>
                </div>
            ) : (
                <LoadingPage />
            )}
        </Content>
    );
}

export default AdminProductDetail;
