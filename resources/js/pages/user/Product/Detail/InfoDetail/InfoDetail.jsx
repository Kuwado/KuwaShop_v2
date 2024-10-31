import classNames from 'classnames/bind';

import styles from './InfoDetail.module.scss';
import { formatPrice } from '~/utils/format';
import ColorBar from './Part/ColorBar';
import SizeOptions from './Part/SizeOptions';
import { useState } from 'react';
import { SizeTable } from '~/constants/Product';
import { QuantityButton } from '~/components/Button';
import ActionButtons from './Part/ActionButtons';
import InformationBox from './Part/InformationBox';

const cx = classNames.bind(styles);

const InfoDetail = ({ product, variant }) => {
    const [selected, setSelected] = useState({ size: '', quantity: 1 });

    const handleChooseSize = (size) => {
        setSelected((prev) => ({ ...prev, size }));
    };

    const handleChangeQuantity = (quantity) => {
        setSelected((prev) => ({ ...prev, quantity }));
    };

    console.log(selected.size);
    return (
        <div className={cx('info-detail')}>
            <div className={cx('name')}>{product.name}</div>
            <div className={cx('sku')}>SKU: {product.sku}</div>
            <div className={cx('category')}>Loại sản phẩm: {product.category_name}</div>
            <div className={cx('price')}>
                <span>{formatPrice(product.price)}</span>
                {product.sale !== 'not' && (
                    <div className={cx('original-price')}>{formatPrice(product.original_price)}</div>
                )}
            </div>
            <div className={cx('color')}>
                <span>Màu sắc: </span>
                <span style={{ color: variant.color_code }}>{variant.color_name}</span>
            </div>
            <ColorBar variants={product.variants} productId={product.id} id={variant.id} />
            <SizeOptions variant={variant} selectedSize={selected.size} handleChooseSize={handleChooseSize} />
            <SizeTable />
            <div className={cx('quantity')}>
                <span>Số lượng: </span>
                <QuantityButton quantity={selected.quantity} setQuantity={handleChangeQuantity} large />
            </div>
            <ActionButtons selected={selected} productId={product.id} variantId={variant.id} />
            <InformationBox intro={product.intro} detail={product.detail} preserve={product.preserve} />
        </div>
    );
};

export default InfoDetail;
