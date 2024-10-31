import classNames from 'classnames/bind';

import styles from './ActionButtons.module.scss';
import { Button, IconButton } from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const ActionButtons = ({ selected, productId, variantId }) => {
    return (
        <div className={cx('action-btns')}>
            <Button secondaryBorder>Thêm vào giỏ hàng</Button>
            <Button primaryBorder>Mua hàng</Button>
            <Button className={cx('favorite-btn')}>
                <FontAwesomeIcon icon={faHeart} />
            </Button>
        </div>
    );
};

export default ActionButtons;
