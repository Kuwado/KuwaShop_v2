import classNames from 'classnames/bind';

import styles from './ThemeButton.module.scss';
import { useContext } from 'react';
import { EffectContext } from '~/context/EffectContext';

const cx = classNames.bind(styles);

const ThemeItem = ({ theme, active, onChangeTheme }) => {
    const { changeEffect } = useContext(EffectContext);

    const handleChangeTheme = () => {
        const root = document.documentElement;
        root.style.setProperty('--primary-r', theme.primary.red);
        root.style.setProperty('--primary-g', theme.primary.green);
        root.style.setProperty('--primary-b', theme.primary.blue);
        root.style.setProperty('--secondary-r', theme.secondary.red);
        root.style.setProperty('--secondary-g', theme.secondary.green);
        root.style.setProperty('--secondary-b', theme.secondary.blue);
        root.style.setProperty('--text-primary', theme.text.primary);
        root.style.setProperty('--text-secondary', theme.text.secondary);
        root.style.setProperty('--background', theme.background);

        onChangeTheme();
        if (theme.effect) {
            changeEffect(theme.effect);
        } else {
            changeEffect('');
        }
    };

    const classes = cx('item', {
        active,
    });

    return (
        <div className={classes} onClick={handleChangeTheme}>
            <span>{theme.title}</span>
        </div>
    );
};

export default ThemeItem;
