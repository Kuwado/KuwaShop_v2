import { useEffect, useRef, useState, memo } from 'react';
import classNames from 'classnames/bind';

import styles from './Colors.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { getColor, getColors } from '~/services/colorService';

const cx = classNames.bind(styles);

const fn = () => {};

const Colors = ({ id, setId, name, setName, error, clearError = fn }) => {
    const [colors, setColors] = useState([]);
    const [show, setShow] = useState(false);
    const colorsRef = useRef(null);

    useEffect(() => {
        const fetchColors = async () => {
            const response = await getColors();
            setColors(response.colors);
        };

        fetchColors();
    }, []);

    const handleClickMenu = () => {
        if (error !== '') {
            clearError();
        }
        setShow(!show);
    };

    const handleColorClick = (color) => {
        setName(color.name);
        setId(color.id);
    };

    const handleClickOutSide = (e) => {
        if (colorsRef.current && !colorsRef.current.contains(e.target)) {
            setShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutSide);

        return () => {
            document.removeEventListener('mousedown', handleClickOutSide);
        };
    }, []);

    return (
        <>
            <div className={cx('colors', { error: error })}>
                <div className={cx('color-btn')} ref={colorsRef} onClick={handleClickMenu}>
                    <span>
                        Màu sắc<span className={cx('required')}>*</span>:
                    </span>
                    <FontAwesomeIcon icon={faPalette} />
                    {show && (
                        <div className={cx('colors-table')}>
                            {colors &&
                                colors.map((color) => (
                                    <span
                                        key={color.id}
                                        className={cx('color-option')}
                                        style={{ backgroundColor: color.code }}
                                        onClick={() => handleColorClick(color)}
                                    >
                                        {/* {color.name} */}
                                    </span>
                                ))}
                        </div>
                    )}
                </div>
                {/* style={{ color: currentColor.code }} */}
                {name && <span className={cx('color-name')}>{name}</span>}
            </div>
            {error && <div className={cx('color-error')}>{error}</div>}
        </>
    );
};

export default memo(Colors);
