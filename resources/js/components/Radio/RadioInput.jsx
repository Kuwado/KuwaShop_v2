import classNames from 'classnames/bind';

import styles from './Radio.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

const RadioInput = ({ name, title, id, checked, onChange }) => {
    return (
        <div className={cx('radio-input')}>
            <label htmlFor={id}>
                {title}
                <input type="radio" name={name} id={id} checked={checked} onChange={onChange} />
                <span className={cx('circle')}></span>
            </label>
        </div>
    );
};

export default RadioInput;
