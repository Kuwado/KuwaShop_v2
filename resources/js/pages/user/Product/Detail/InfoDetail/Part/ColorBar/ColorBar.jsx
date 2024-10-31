import classNames from 'classnames/bind';

import styles from './ColorBar.module.scss';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const ColorBar = ({ variants = [], productId, id }) => {
    const navigate = useNavigate();

    const handleClickDot = (variantId) => {
        navigate(`/product/${productId}/${variantId}`);
    };

    return (
        <div className={cx('color-bar')}>
            {variants.length > 0 &&
                variants.map((variant, index) => (
                    <div
                        className={cx('color-dot', { active: variant.id === id })}
                        key={`color-dot-${index}`}
                        style={{ backgroundColor: variant.color_code }}
                        onClick={() => handleClickDot(variant.id)}
                    ></div>
                ))}
        </div>
    );
};

export default ColorBar;
