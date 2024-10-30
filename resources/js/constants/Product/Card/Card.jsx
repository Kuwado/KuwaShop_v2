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
    const navigate = useNavigate();
    const variantImages = product?.variants?.[0]?.images || [];
    const [currentImages, setImages] = useState([
        variantImages[0] ?? images.noImage,
        variantImages[1] ?? images.noImage,
    ]);
    const [variantId, setVariantId] = useState(
        product.variants[0] && product.variants[0].id ? product.variants[0].id : '',
    );
    const sale = product.sale_type !== 'not';

    const handleClickCard = () => {
        navigate(`/product/${product.id}/${variantId}`);
    };

    return (
        <div className={cx('card')}>
            <div className={cx('image')} onClick={handleClickCard}>
                <Image className={cx('image-1')} src={currentImages[0]} width="100%" height="100%" />
                <Image className={cx('image-2')} src={currentImages[1]} width="100%" height="100%" />
            </div>
            <div className={cx('body')}>
                <ColorBar variants={product.variants} setImages={setImages} setVariantId={setVariantId} />
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
                    <SizePicker />
                </div>
            </div>
        </div>
    );
};

export default Card;
