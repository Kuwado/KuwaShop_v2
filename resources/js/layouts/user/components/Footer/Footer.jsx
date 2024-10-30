import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import images from '~/assets/images';
import { Image } from '~/components/Image';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <div className={cx('footer')}>
            <div className={cx('left')}>
                <div className={cx('logo')}>
                    <Image src={images.logo} width="100%" height="100%" />
                </div>
            </div>
            <div className={cx('right')}>
                <div>Lưu Việt Hoàn - 20215054</div>
            </div>
        </div>
    );
};

export default Footer;
