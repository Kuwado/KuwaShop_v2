import classNames from 'classnames/bind';

import styles from './PreviewCart.module.scss';
import { formatPrice } from '~/utils/format';
import { Button, CloseButton, IconButton } from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import images from '~/assets/images';
import PreviewCartItem from './PreviewCartItem';

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
    const [show, setShow] = useState('show');
    const [cart, setCart] = useState({ ...CART });

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
                number={cart.quantity > 0 && cart.quantity}
            />
            <div className={cx('content', { active: show === 'open', inactive: show === 'close' })}>
                <div className={cx('header')}>
                    <div className={cx('title')}>
                        <h2>Giỏ hàng</h2>
                        {cart.quantity > 0 && <div className={cx('number')}>{cart.quantity}</div>}{' '}
                    </div>
                    <CloseButton className={cx('close-btn')} onClick={handleCloseCart} />
                </div>
                <div className={cx('body')}>
                    {cart.products.map((item, index) => (
                        <PreviewCartItem key={`cart-item-${index}`} item={item} />
                    ))}
                </div>
                <div className={cx('footer')}>
                    <div className={cx('total-price')}>Tổng tiền: {formatPrice(cart.total_price)}</div>
                    <Button secondaryBorder large>
                        Xem giỏ hàng
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PreviewCart;
