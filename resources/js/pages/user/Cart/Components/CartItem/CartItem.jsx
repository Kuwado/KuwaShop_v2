import classNames from 'classnames/bind';

import styles from './CartItem.module.scss';
import { QuantityButton } from '~/components/Button';
import { Image } from '~/components/Image';
import { formatPrice } from '~/utils/format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '~/hooks/useCart';

const cx = classNames.bind(styles);

const CartItem = ({ item }) => {
    const { handleDeleteCart } = useCart();

    const handleDeleteItem = (cartId) => {
        const cf = confirm('Bạn có muốn xóa sản phẩm này khỏi giỏ hàng không?');
        if (cf) {
            handleDeleteCart(cartId);
        }
    };

    return (
        <div className={cx('cart-item')}>
            <div className={cx('avatar')}>
                <Image src={item.variant.images[0]} width="100%" height="100%" />
            </div>

            <div className={cx('name')}>{item.variant.product.name}</div>

            <div className={cx('infor')}>
                <div className={cx('color')}>Màu sắc: {item.variant.color_name}</div>
                <div className={cx('size')}>
                    Size: <span>{item.size}</span>
                </div>
            </div>

            <div className={cx('quantity')}>
                <QuantityButton large cartId={item.id} quantity={item.quantity} />
            </div>

            <div className={cx('price')}>{formatPrice(item.total)}</div>

            <div className={cx('delete-btn-con')}>
                <div className={cx('delete-btn')} onClick={() => handleDeleteItem(item.id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
