import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.scss';
import classNames from 'classnames/bind';
import StepOne from '../Create/StepOne/StepOne';

const cx = classNames.bind(styles);

function AdminProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [variants, setVariants] = useState([]);

    console.log(product);
    console.log(variants);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/api/product?id=${id}`);
                if (response.status === 200) {
                    setProduct(response.data.product);
                    setVariants(response.data.variants);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchProduct();
    }, []);

    return (
        <div className={cx('product-detail')}>
            <div className={cx('product')}>{/* <StepOne product={product} /> */}</div>
            <div className={cx('variants')}></div>
        </div>
    );
}

export default AdminProductDetail;
