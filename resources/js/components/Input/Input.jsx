import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
        return '';
    } else if (!emailRegex.test(value)) {
        return 'Invalid email format';
    }
    return '';
};

const Input = ({ type = 'text', name, label, required, spellCheck = false, note, validate = validateEmail }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const inputValue = e.target.value;
        if (!inputValue.startsWith(' ')) {
            console.log(inputValue);
            setValue(inputValue);

            if (validate) {
                const errorMessage = validate(e.target.value);
                setError(errorMessage);
            }
        }
    };

    return (
        <div className={cx('input')}>
            <div className={cx('content')}>
                <input
                    type={type}
                    name={name}
                    id={name}
                    required={required}
                    placeholder=" "
                    spellCheck={spellCheck}
                    value={value}
                    onChange={handleChange}
                />
                {label && (
                    <label htmlFor={name}>
                        {label}
                        {required && <span className={cx('required-note')}>*</span>}
                    </label>
                )}
            </div>
            <div className={cx('message')}>
                {note && !value && !error && <div className={cx('note-message')}>{note}</div>}
                {error && <div className={cx('error-message')}>{error}</div>}
            </div>
        </div>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    required: PropTypes.bool,
    spellCheck: PropTypes.bool,
    note: PropTypes.string,
    validate: PropTypes.func,
};

export default Input;
