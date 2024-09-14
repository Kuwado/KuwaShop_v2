import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import styles from './ThemeButton.module.scss';
import { IconButton } from '..';
import ThemeItem from './ThemeItem';

const cx = classNames.bind(styles);

const THEMES = [
    {
        id: 1,
        title: 'Sáng',
        primary: {
            red: 0,
            green: 204,
            blue: 255,
        },
        secondary: {
            red: 27,
            green: 51,
            blue: 127,
        },
        text: {
            primary: 'black',
            secondary: 'white',
        },
    },
    {
        id: 2,
        title: 'Tối',
        primary: {
            red: 27,
            green: 51,
            blue: 127,
        },
        secondary: {
            red: 0,
            green: 204,
            blue: 255,
        },
        text: {
            primary: 'white',
            secondary: 'black',
        },
    },
    {
        id: 3,
        title: 'Trắng',
        primary: {
            red: 255,
            green: 255,
            blue: 255,
        },
        secondary: {
            red: 0,
            green: 0,
            blue: 0,
        },
        text: {
            primary: 'black',
            secondary: 'white',
        },
    },
    {
        id: 4,
        title: 'Đen',
        primary: {
            red: 0,
            green: 0,
            blue: 0,
        },
        secondary: {
            red: 255,
            green: 255,
            blue: 255,
        },
        text: {
            primary: 'white',
            secondary: 'black',
        },
    },
];

const ThemeButon = ({ themes = THEMES }) => {
    const [theme, setTheme] = useState(1);
    const [visible, setVisible] = useState(false);
    const [icon, setIcon] = useState(<FontAwesomeIcon icon={faSun} />);

    useEffect(() => {
        switch (theme) {
            case 1:
                setIcon(<FontAwesomeIcon icon={faSun} />);
                break;
            case 2:
                setIcon(<FontAwesomeIcon icon={faMoon} />);
                break;
            case 3:
                setIcon(<div>W</div>);
                break;
            case 4:
                setIcon(<div>B</div>);
                break;
            default:
                setIcon(<FontAwesomeIcon icon={faSun} />);
        }
        setVisible(false);
    }, [theme]);

    const renderMenu = (attrs) => (
        <div className={cx('menu')} tabIndex="-1" {...attrs}>
            {themes.map((item) => (
                <ThemeItem
                    key={item.id}
                    theme={item}
                    active={item.id === theme}
                    onChangeTheme={() => setTheme(item.id)}
                />
            ))}
        </div>
    );

    return (
        <HeadlessTippy
            interactive
            visible={visible}
            placement="bottom-end"
            delay={[0, 700]}
            offset={[10, 5]}
            render={renderMenu}
            onClickOutside={() => setVisible(false)}
        >
            <IconButton icon={icon} content="Chế độ" onClick={() => setVisible(!visible)} />
        </HeadlessTippy>
    );
};

export default ThemeButon;
