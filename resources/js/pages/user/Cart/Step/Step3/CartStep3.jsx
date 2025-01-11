import classNames from 'classnames/bind';

import styles from './CartStep3.module.scss';
import CartStep from '../../Components/CartStep/CartStep';
import { useCart } from '~/hooks/useCart';
import { formatPrice } from '~/utils/format';
import { Button } from '~/components/Button';
import { useNavigate } from 'react-router-dom';
import config from '~/config';
import { Input } from '~/components/Input';
import useProfile from '~/hooks/useProfile';
import Address from '~/constants/Address';
import Dropdown from '~/components/Dropdown';
import { useContext, useEffect } from 'react';
import { AuthContext } from '~/context/AuthContext';

const cx = classNames.bind(styles);

const CartStep3 = () => {
    const { profile: loginedProfile } = useContext(AuthContext);
    const { profile, setProfileField, setProfile } = useProfile();
    const { cartData } = useCart();
    const navigate = useNavigate();

    console.log(profile);
    console.log(loginedProfile);

    useEffect(() => {
        setProfile(loginedProfile);
    }, [loginedProfile]);

    return (
        <div className={cx('cart-page')}>
            <div className={cx('cart-left')}>
                <CartStep step={3} />
                <div className={cx('cart-content')}></div>
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
                    onClick={() => navigate(config.routes.user.cartStep3)}
                >
                    Đặt hàng
                </Button>
            </div>
        </div>
    );
};

export default CartStep3;
