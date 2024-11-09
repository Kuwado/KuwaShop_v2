import classNames from 'classnames/bind';

import styles from './QuantityButton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { udpateCart } from '~/services/cartService';
import { useCart } from '~/hooks/useCart';

const cx = classNames.bind(styles);

const fn = () => {};

const QuantityButton = ({ cartId, quantity = 1, large = false, onMore = fn, onLess = fn, setQuantity, max = 5 }) => {
    const { handleUpdateCart } = useCart();
    const handleMoreQuantity = async () => {
        if (quantity < max) {
            onMore();
            await handleUpdateCart(cartId, quantity + 1);
        }
    };

    const handleLessQuantity = async () => {
        if (quantity > 1) {
            onLess();
            await handleUpdateCart(cartId, quantity - 1);
        } else {
            const confirmed = window.confirm('Bạn có chắc muốn xóa sản phẩm khỏi giỏ hàng?');
        }
    };

    return (
        <div className={cx('quantity-btn', { large: large })}>
            <button className={cx('less-btn')} type="button" onClick={handleLessQuantity}>
                <FontAwesomeIcon icon={faMinus} />
            </button>
            <div className={cx('number')}>{quantity}</div>
            <button className={cx('more-btn')} type="button" onClick={handleMoreQuantity}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
};

export default QuantityButton;
