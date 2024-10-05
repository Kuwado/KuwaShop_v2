import classNames from 'classnames/bind';

import styles from './Steps.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';
import LoadingPage from '~/pages/other/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const StepThree = ({ messages, loading }) => {
    return (
        <div className={cx('step-three')}>
            {loading ? (
                <div className={cx('loading')}>
                    <FontAwesomeIcon icon={faSpinner} />
                </div>
            ) : (
                <div className={cx('done')}>
                    <Image src={images.done} alt="done" height="100%" />
                </div>
            )}

            {messages.length > 0 ? messages.map((message) => <div>{message}</div>) : <div>Vui lòng chờ</div>}

            {/* {!loading ? (
                <>
                    <div className={cx('done')}>
                        <Image src={images.done} alt="done" height="100%" />
                    </div>
                    <div className={cx('messages')}>
                        {messages.map((mess, index) => (
                            <div key={index}>{mess}</div>
                        ))}
                    </div>
                </>
            ) : (
                <LoadingPage className={cx('loading')} />
            )} */}
        </div>
    );
};

export default StepThree;
