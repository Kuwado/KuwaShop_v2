import classNames from 'classnames/bind';

import styles from './Part.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const LoadingSlider = () => {
    return (
        <div className={cx('loading-slider')}>
            <div className={cx('loading-icon')}>
                <FontAwesomeIcon icon={faBicycle} />
            </div>
        </div>
    );
};

export default LoadingSlider;
