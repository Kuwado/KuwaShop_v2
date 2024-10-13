import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import { CardCollection } from '~/constants/Product';
import { useEffect, useState } from 'react';
import { getProducts } from '~/services/productService';

const cx = classNames.bind(styles);

const Home = () => {
    const [newProducts, setNewProducts] = useState([]);
    console.log(newProducts);

    useEffect(() => {
        const fetchNewProducts = async () => {
            const response = await getProducts('new', 1, null, true, 10);
            setNewProducts(response.products.data);
        };

        fetchNewProducts();
    }, []);

    return (
        <div className={cx('home')}>
            <CardCollection id="new" products={newProducts} />
        </div>
    );
};

export default Home;
