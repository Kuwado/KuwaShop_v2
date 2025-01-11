import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './PreviewCart.module.scss';
import { formatPrice } from '~/utils/format';
import { Button, CloseButton, IconButton } from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import PreviewCartItem from './PreviewCartItem';
import { getCarts } from '~/services/cartService';
import { AuthContext } from '~/context/AuthContext';
import { useCart } from '~/hooks/useCart';
import { useNavigate } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

const CART = {
    quantity: 3,
    total_price: '2997000',
    products: [
        {
            id: 1,
            avatar: images.productTest,
            name: 'Áo đẹp lawms nha csa hasos hgwoi dgbd hhd kkks dhd kskjs jdhd hhd',
            color_name: 'Xanh dương',
            size: 'xl',
            quantity: 1,
            price: '999000',
        },
        {
            id: 2,
            avatar: images.productTest,
            name: 'Áo đẹp 2',
            color_name: 'Xanh dương',
            size: 'xl',
            quantity: 1,
            price: '999000',
        },
        {
            id: 3,
            avatar: images.productTest,
            name: 'Áo đẹp 3',
            color_name: 'Xanh dương',
            size: 'xl',
            quantity: 1,
            price: '999000',
        },
    ],
};

const PreviewCart = () => {
    const { cartData } = useCart();
    const [show, setShow] = useState('show');
    const navigate = useNavigate();

    const handleOpenCart = () => {
        setShow('open');
    };

    const handleCloseCart = () => {
        setShow('close');
    };

    return (
        <div className={cx('preview-cart')}>
            <IconButton
                icon={<FontAwesomeIcon icon={faCartShopping} />}
                content="Giỏ hàng"
                onClick={handleOpenCart}
                number={cartData.count > 0 && cartData.count}
            />
            <div className={cx('content', { active: show === 'open', inactive: show === 'close' })}>
                <div className={cx('header')}>
                    <div className={cx('title')}>
                        <h2>Giỏ hàng</h2>
                        {cartData.count > 0 && <div className={cx('number')}>{cartData.count}</div>}{' '}
                    </div>
                    <CloseButton className={cx('close-btn')} onClick={handleCloseCart} />
                </div>
                <div className={cx('body')}>
                    {cartData.carts &&
                        cartData.carts.length > 0 &&
                        cartData.carts.map((item, index) => (
                            <PreviewCartItem key={`preview-cart-item-${index}`} item={item} />
                        ))}
                </div>
                <div className={cx('footer')}>
                    <div className={cx('total-price')}>Tổng tiền: {formatPrice(cartData.total_price)}</div>
                    <Button secondaryBorder large onClick={() => navigate(config.routes.user.cart)}>
                        Xem giỏ hàng
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PreviewCart;
