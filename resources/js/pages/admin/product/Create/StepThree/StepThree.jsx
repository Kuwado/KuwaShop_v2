import classNames from 'classnames/bind';

import styles from './StepThree.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const StepThree = ({ messages = [], loading }) => {
    return (
        <div className={cx('step-three')}>
            <div className={cx('loading', { active: loading })}>
                {loading ? <FontAwesomeIcon icon={faSpinner} /> : <Image src={images.done} alt="done" height="100%" />}
            </div>

            <div className={cx('messages')}>
                {messages.map((mess, index) => (
                    <div key={index}>{mess}</div>
                ))}
            </div>

            {/* <div className={cx('errors')}>
                {errors.map((error, index) => (
                    <div key={index}>{error}</div>
                ))}
            </div> */}
        </div>
    );
};

export default StepThree;
