import classNames from 'classnames/bind';

import styles from './Card.module.scss';
import { Card } from '..';

const cx = classNames.bind(styles);

const CardCollection = ({ title = 'Collection', id = '', products = [] }) => {
    return (
        <div className={cx('card-collection')}>
            <h2>{title}</h2>
            <div className={cx('collection')}>
                {products.length > 0 &&
                    products.map((product) => <Card key={`card-${id}-${product.id}`} product={product} />)}
            </div>
        </div>
    );
};

export default CardCollection;
