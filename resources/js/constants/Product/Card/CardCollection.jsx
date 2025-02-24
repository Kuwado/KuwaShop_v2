import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import styles from './Card.module.scss';
import { Card } from '..';
import LoadingSlider from './Part/LoadingSlider';
import { Button } from '~/components/Button';

const cx = classNames.bind(styles);

const responsive = {
    desktop: {
        breakpoint: { max: 4000, min: 1280 },
        items: 5,
    },
    laptop: {
        breakpoint: { max: 1280, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
    },
    minitablet: {
        breakpoint: { max: 768, min: 480 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 480, min: 0 },
        items: 2,
    },
};

const CardCollection = ({ id = '', title = 'Collection', collection = [], url }) => {
    const sliderRef = useRef(null);
    const navigate = useNavigate();

    const handleGoToAll = () => {
        navigate(url);
    };

    return (
        <div className={cx('card-collection')}>
            <h2>{title}</h2>

            <div className={cx('slider')}>
                <Carousel
                    ref={sliderRef}
                    responsive={responsive}
                    infinite={false}
                    removeArrowOnDeviceType={['minitablet', 'mobile']}
                >
                    {collection.length > 0 &&
                        collection.map((product) => <Card key={`card-${id}-${product.id}`} product={product} />)}
                </Carousel>
            </div>

            {url && (
                <Button primaryBorder large onClick={handleGoToAll}>
                    Xem tất cả
                </Button>
            )}
        </div>
    );
};

export default CardCollection;
