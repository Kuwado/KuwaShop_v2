import classNames from 'classnames/bind';

import styles from './Cart.module.scss';
import CartStep from '../Components/CartStep/CartStep';
import { useCart } from '~/hooks/useCart';
import { formatPrice } from '~/utils/format';
import CartItem from '../Components/CartItem/CartItem';
import { Button } from '~/components/Button';
import { useNavigate } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

const Cart = () => {
    const { cartData } = useCart();
    const navigate = useNavigate();

    return (
        <div className={cx('cart-page')}>
            <div className={cx('cart-left')}>
                <CartStep step={1} />
                <div className={cx('cart-content')}>
                    <div className={cx('cart-list-header')}>
                        <span>Ảnh đại diện</span>
                        <span>Tên sản phẩm</span>
                        <span>Thông tin</span>
                        <span>Số lượng</span>
                        <span>Tổng tiền</span>
                        <span>Xóa</span>
                    </div>
                    {cartData.carts && cartData.carts.length > 0 ? (
                        cartData.carts.map((item, index) => <CartItem key={`cart-item-${index}`} item={item} />)
                    ) : (
                        <div>Vui lòng thêm hàng vào giỏ</div>
                    )}
                </div>
            </div>
            <div className={cx('cart-right')}>
                <h2>Tổng tiền giỏ hàng</h2>
                <div className={cx('cart-right-line')}>
                    <span>Tổng sản phẩm: </span>
                    <span>{cartData.count}</span>
                </div>
                <div className={cx('cart-right-line')}>
                    <span>Tổng số lượng: </span>
                    <span>{cartData.total_variant}</span>
                </div>
                <div className={cx('cart-right-line')}>
                    <span>Tổng tiền: </span>
                    <span style={{ fontWeight: 600 }}>{formatPrice(cartData.total_price)}</span>
                </div>
                <div className={cx('cart-right-last-line')}></div>
                <Button
                    secondaryBorder
                    width="100%"
                    contentCenter
                    large
                    onClick={() => navigate(config.routes.user.cartStep2)}
                >
                    Đặt hàng
                </Button>
            </div>
        </div>
    );
};

export default Cart;
