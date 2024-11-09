import classNames from 'classnames/bind';

import styles from './ActionButtons.module.scss';
import { Button, IconButton } from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '~/hooks/useCart';

const cx = classNames.bind(styles);

const ActionButtons = ({ selected, productId, variantId, disabled }) => {
    const { handleAddToCart } = useCart();

    const addItemToCart = async () => {
        if (!selected.size) {
            alert('Vui lòng chọn size!');
        } else {
            await handleAddToCart(variantId, selected.size, selected.quantity);
        }
    };

    return (
        <div className={cx('action-btns')}>
            <Button secondaryBorder onClick={addItemToCart} disabled={disabled}>
                Thêm vào giỏ hàng
            </Button>
            <Button primaryBorder disabled={disabled}>
                Mua hàng
            </Button>
            <Button className={cx('favorite-btn')}>
                <FontAwesomeIcon icon={faHeart} />
            </Button>
        </div>
    );
};

export default ActionButtons;
