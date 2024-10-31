import classNames from 'classnames/bind';

import styles from './QuantityButton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const QuantityButton = ({ quantity = 1, large = false, setQuantity, max = 5 }) => {
    const handleMoreQuantity = () => {
        if (quantity < max) {
            setQuantity(quantity + 1);
        }
    };

    const handleLessQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
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
