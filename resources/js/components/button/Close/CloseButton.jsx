import classNames from 'classnames/bind';

import styles from './CloseButton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const fn = () => {};

const CloseButton = ({ className, onClick = fn }) => {
    return (
        <div className={cx('close-btn', { [className]: className })} onClick={onClick}>
            <FontAwesomeIcon icon={faXmark} />
        </div>
    );
};

export default CloseButton;
