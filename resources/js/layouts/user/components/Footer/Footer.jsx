import classNames from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <div className={cx('footer')}>
            <div className={cx('left')}></div>
            <div className={cx('right')}></div>
        </div>
    );
};

export default Footer;
