import classNames from 'classnames/bind';

import styles from './Card.module.scss';
import { Image } from '~/components/Image';
import { useState } from 'react';
import images from '~/assets/images';
import ColorBar from './Part/ColorBar';
import SizePicker from './Part/SizePicker';
import { formatPrice } from '~/utils/format';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const Card = ({ product }) => {
    const [variant, setVariant] = useState(product?.variants?.[0] || {});
    const navigate = useNavigate();

    const sale = product.sale_type !== 'not';

    const handleClickCard = () => {
        navigate(`/product/${product.id}/${variant.id}`);
    };

    return (
        <div className={cx('card')}>
            <div className={cx('image')} onClick={handleClickCard}>
                <Image
                    className={cx('image-1')}
                    src={variant.images && variant.images.length > 0 ? variant.images[0] : images.noImage}
                    width="100%"
                    height="100%"
                />
                <Image
                    className={cx('image-2')}
                    src={variant.images && variant.images.length > 1 ? variant.images[1] : images.noImage}
                    width="100%"
                    height="100%"
                />
            </div>
            <div className={cx('body')}>
                <ColorBar variants={product.variants} setVariant={setVariant} />
                <div className={cx('name-box')}>
                    <h3 className={cx('name')} onClick={handleClickCard}>
                        {product.name}
                    </h3>
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('price')}>
                        <div className={cx('discount')}>{formatPrice(product.price)}</div>
                        {sale && <div className={cx('original')}>{formatPrice(product.original_price)}</div>}
                    </div>
                    <SizePicker variant={variant} />
                </div>
            </div>
        </div>
    );
};

export default Card;
