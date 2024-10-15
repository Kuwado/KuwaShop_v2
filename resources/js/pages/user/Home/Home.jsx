import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import { CardCollection } from '~/constants/Product';
import { useEffect, useState } from 'react';
import { getProducts } from '~/services/productService';
import Banner from './Banner';

const cx = classNames.bind(styles);

const Home = () => {
    const [newProducts, setNewProducts] = useState([]);
    const [newCollections, setNewCollections] = useState([]);

    console.log(newCollections);

    useEffect(() => {
        const fetchNewProducts = async () => {
            const response = await getProducts('new', 1, null, true, 10);
            const response2 = await getProducts('new', 2, null, true, 10);
            setNewCollections([
                { name: 'Áo mới', products: response.products.data },
                { name: 'Quần mới', products: response2.products.data },
            ]);
        };

        fetchNewProducts();
    }, []);

    return (
        <div className={cx('home')}>
            <Banner />
            <CardCollection id="new" title="Sản phẩm mới" collections={newCollections} url="products?type=new" />
        </div>
    );
};

export default Home;
