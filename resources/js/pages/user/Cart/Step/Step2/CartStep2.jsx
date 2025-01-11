import classNames from 'classnames/bind';

import styles from './CartStep2.module.scss';
import CartStep from '../../Components/CartStep/CartStep';
import { useCart } from '~/hooks/useCart';
import { formatPrice } from '~/utils/format';
import CartItem from '../../Components/CartItem/CartItem';
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

const CartStep2 = () => {
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
                <CartStep step={2} />
                <div className={cx('cart-content')}>
                    <div className={cx('title')}>Thông tin người nhận hàng</div>

                    <div className={cx('two-items')}>
                        <Input
                            value={profile.first_name}
                            name="first-name"
                            type="text"
                            onChange={(e) => setProfileField('first_name', e.target.value)}
                            label="Họ"
                            required
                        />
                        <Input
                            value={profile.last_name}
                            name="last-name"
                            type="text"
                            onChange={(e) => setProfileField('last_name', e.target.value)}
                            label="Tên"
                            required
                        />
                    </div>

                    <div className={cx('two-items')}>
                        <Input
                            value={profile.phone}
                            name="phone"
                            onChange={(e) => setProfileField('phone', e.target.value)}
                            label="Số điện thoại"
                            required
                        />
                        <Dropdown title="Chọn giới tính" label="Giới tính" selected={profile.gender} required>
                            <Button width="100%" noRadius onClick={() => setProfileField('gender', 'Nam')}>
                                Nam
                            </Button>
                            <Button width="100%" noRadius onClick={() => setProfileField('gender', 'Nữ')}>
                                Nữ
                            </Button>
                            <Button width="100%" noRadius onClick={() => setProfileField('gender', 'Khác')}>
                                Khác
                            </Button>
                        </Dropdown>
                    </div>

                    <Address
                        address={profile.address}
                        ward={profile.ward}
                        district={profile.district}
                        province={profile.province}
                        setField={setProfileField}
                    />
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
                    onClick={() => navigate(config.routes.user.cartStep3)}
                >
                    Thanh Toán
                </Button>
            </div>
        </div>
    );
};

export default CartStep2;
