import classNames from 'classnames/bind';

import styles from './Cart.module.scss';
import CartStep from '../Components/CartStep/CartStep';
import { useCart } from '~/hooks/useCart';
import PreviewCartItem from '~/layouts/user/components/Header/Part/PreviewCart/PreviewCartItem';
import CartItem from '../Components/CartItem/CartItem';

const cx = classNames.bind(styles);

const Cart = () => {
    const { cartData } = useCart();
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
            <div className={cx('cart-right')}></div>
        </div>
    );
};

export default Cart;
