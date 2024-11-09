import classNames from 'classnames/bind';

import styles from './PreviewCart.module.scss';
import { Image } from '~/components/Image';
import { formatPrice } from '~/utils/format';
import { QuantityButton } from '~/components/Button';
import { udpateCart } from '~/services/cartService';

const cx = classNames.bind(styles);

const PreviewCartItem = ({ item }) => {
    return (
        <div className={cx('preview-cart-item')}>
            <div className={cx('avatar')}>
                <Image src={item.variant.images[0]} width="100%" height="100%" />
            </div>
            <div className={cx('item-content')}>
                <div className={cx('name')}>{item.variant.product.name}</div>
                <div className={cx('color')}>Màu sắc: {item.variant.color_name}</div>
                <div className={cx('size')}>
                    Size: <span>{item.size}</span>
                </div>
                <div className={cx('line')}>
                    <div className={cx('quantity')}>
                        <QuantityButton cartId={item.id} quantity={item.quantity} />
                    </div>
                    <div className={cx('price')}>{formatPrice(item.variant.product.price)}</div>
                </div>
            </div>
        </div>
    );
};

export default PreviewCartItem;
