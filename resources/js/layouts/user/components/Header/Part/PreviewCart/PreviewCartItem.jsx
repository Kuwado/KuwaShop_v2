import classNames from 'classnames/bind';

import styles from './PreviewCart.module.scss';
import Image from '~/components/Image';
import { formatPrice } from '~/utils/format';
import { QuantityButton } from '~/components/Button';

const cx = classNames.bind(styles);

const PreviewCartItem = ({ item }) => {
    return (
        <div className={cx('preview-cart-item')}>
            <div className={cx('avatar')}>
                <Image src={item.avatar} width="100%" height="100%" />
            </div>
            <div className={cx('item-content')}>
                <div className={cx('name')}>{item.name}</div>
                <div className={cx('color')}>Màu sắc: {item.color_name}</div>
                <div className={cx('size')}>
                    Size: <span>{item.size}</span>
                </div>
                <div className={cx('line')}>
                    <div className={cx('quantity')}>
                        <QuantityButton quantity={item.quantity} />
                    </div>
                    <div className={cx('price')}>{formatPrice(item.price)}</div>
                </div>
            </div>
        </div>
    );
};

export default PreviewCartItem;
