import classNames from 'classnames/bind';

import styles from './Steps.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';
import LoadingPage from '~/pages/other/Loading';

const cx = classNames.bind(styles);

const StepThree = ({ messages, loading }) => {
    return (
        <div className={cx('step-three')}>
            {!loading ? (
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
            )}
        </div>
    );
};

export default StepThree;
