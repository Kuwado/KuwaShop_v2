import classNames from 'classnames/bind';

import styles from './Part.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const ColorBar = ({ variants = [], setImages }) => {
    const [current, setCurrent] = useState(0);
    const [favorite, setFavorite] = useState(false);

    const handleChangeColor = (variant, index) => {
        console.log(variant);
        setImages([variant.images[0] ?? images.noImage, variant.images[1] ?? images.noImage]);
        setCurrent(index);
    };

    const handleFavorite = () => {
        setFavorite((prev) => !prev);
    };

    return (
        <div className={cx('color-bar')}>
            <div className={cx('colors')}>
                {variants.length > 0 &&
                    variants.map((variant, index) => (
                        <div
                            key={`color-${variant.id}`}
                            className={cx('color', { active: index === current })}
                            style={{ backgroundColor: variant.color_code }}
                            onClick={() => handleChangeColor(variant, index)}
                        ></div>
                    ))}
            </div>
            <div className={cx('favorite', { active: favorite })} onClick={handleFavorite}>
                <FontAwesomeIcon icon={faHeart} />
            </div>
        </div>
    );
};

export default ColorBar;
