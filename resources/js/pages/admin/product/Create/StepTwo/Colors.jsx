import { useEffect, useRef, useState, memo } from 'react';
import classNames from 'classnames/bind';

import styles from './StepTwo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const COLORS = [
    {
        id: 1,
        name: 'Đỏ',
        code: '#123456',
    },
    {
        id: 2,
        name: 'Xanh',
        code: '#ad4569',
    },
    {
        id: 3,
        name: 'Vàng',
        code: '#aaabcd',
    },
    {
        id: 4,
        name: 'Lam',
        code: '#ffddee',
    },
    {
        id: 5,
        name: 'Cam',
        code: '#654321',
    },
];

const Colors = ({ colorId, setColorId }) => {
    const colors = COLORS;
    const [show, setShow] = useState(false);
    const currentColor = colors.find((color) => color.id === colorId);
    const colorsRef = useRef(null);

    const handleColorClick = (color) => {
        // setShow(false);
        setColorId(color.id);
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
        <div className={cx('colors')}>
            <div className={cx('color-btn')} ref={colorsRef} onClick={() => setShow(!show)}>
                <span>Màu sắc: </span>
                <FontAwesomeIcon icon={faPalette} />
                {show && (
                    <div className={cx('colors-table')}>
                        {colors.map((color) => (
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
            {currentColor && (
                <span className={cx('color-name')} style={{ color: currentColor.code }}>
                    {currentColor.name}
                </span>
            )}
        </div>
    );
};

export default memo(Colors);
