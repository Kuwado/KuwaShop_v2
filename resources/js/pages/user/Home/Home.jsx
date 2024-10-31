import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import { CardCollections } from '~/constants/Product';
import { useEffect, useState } from 'react';
import { getProducts } from '~/services/productService';
import Banner from './Banner';

const cx = classNames.bind(styles);

const Home = () => {
    const [newCollections, setNewCollections] = useState([]);
    const [hotCollections, setHotCollections] = useState([]);

    useEffect(() => {
        const fetchNewProducts = async () => {
            const response = await getProducts('new', 1, null, true, 10);
            const response2 = await getProducts('new', 2, null, true, 10);
            setNewCollections([
                { name: 'Áo mới', products: response.products.data },
                { name: 'Quần mới', products: response2.products.data },
            ]);
        };

        const fetchHotProducts = async () => {
            const response = await getProducts('hot', 1, null, true, 10);
            const response2 = await getProducts('hot', 2, null, true, 10);
            setHotCollections([
                { name: 'Áo bán chạy', products: response.products.data },
                { name: 'Quần bán chạy', products: response2.products.data },
            ]);
        };

        fetchNewProducts();
        fetchHotProducts();
    }, []);

    return (
        <div className={cx('home')}>
            <Banner />
            <CardCollections id="new" title="Sản phẩm mới" collections={newCollections} url="products?type=new" />
            <CardCollections id="hot" title="Sản phẩm bán chạy" collections={hotCollections} url="products?type=hot" />
        </div>
    );
};

export default Home;
