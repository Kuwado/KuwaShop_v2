import classNames from 'classnames/bind';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import styles from './Home.module.scss';
import Image from '~/components/Image';
import banner from '~/assets/banner';
import { useState } from 'react';
import { Button } from '~/components/Button';

const cx = classNames.bind(styles);

const responsive = {
    desktop: {
        breakpoint: { max: 4000, min: 1280 },
        items: 1,
    },
    laptop: {
        breakpoint: { max: 1280, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 1,
    },
    minitablet: {
        breakpoint: { max: 768, min: 480 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 480, min: 0 },
        items: 1,
    },
};

const ITEMS = [
    {
        title: 'Phong cách cool ngầu - Tự tin cá tính',
        des: 'Cùng mua ngay những trang phục hiphop với mức giảm giá lên tới 299K, còn chờ gì nữa',
        url: '/products?category_id=1&&type=new',
    },
    {
        title: 'Phong cách cool ngầu - Tự tin cá tính',
        des: 'Cùng mua ngay những trang phục hiphop với mức giảm giá lên tới 299K, còn chờ gì nữa',
        url: '/products?category_id=1&&type=new',
    },
    {
        title: 'Phong cách cool ngầu - Tự tin cá tính',
        des: 'Cùng mua ngay những trang phục hiphop với mức giảm giá lên tới 299K, còn chờ gì nữa',
        url: '/products?category_id=1&&type=new',
    },
    {
        title: 'Phong cách cool ngầu - Tự tin cá tính',
        des: 'Cùng mua ngay những trang phục hiphop với mức giảm giá lên tới 299K, còn chờ gì nữa',
        url: '/products?category_id=1&&type=new',
    },
    {
        title: 'Phong cách cool ngầu - Tự tin cá tính',
        des: 'Cùng mua ngay những trang phục hiphop với mức giảm giá lên tới 299K, còn chờ gì nữa',
        url: '/products?category_id=1&&type=new',
    },
];

const Banner = () => {
    const [contents, setContents] = useState(ITEMS);

    return (
        <div className={cx('banner')}>
            <Carousel
                responsive={responsive}
                infinite={true}
                showDots={true}
                autoPlay={true}
                autoPlaySpeed={7000}
                keyBoardControl={true}
                removeArrowOnDeviceType={['minitablet', 'mobile']}
            >
                {banner.length > 0 &&
                    banner.map((item, index) => (
                        <div key={`banner-${index}`} className={cx('banner-item')}>
                            <Image className={cx('banner-image')} src={item} width="100%" height="100%" />
                            <div className={cx('banner-content')}>
                                <span className={cx('banner-title')}>{contents[index].title}</span>
                                <span className={cx('banner-des')}>{contents[index].des}</span>
                                <Button secondaryBorder large>
                                    Mua ngay
                                </Button>
                            </div>
                        </div>
                    ))}
            </Carousel>
        </div>
    );
};

export default Banner;
