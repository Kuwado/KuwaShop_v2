import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';
import { forwardRef, useState } from 'react';

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

const Input = forwardRef(
    (
        {
            type = 'text',
            name,
            value,
            onChange,
            label,
            required,
            spellCheck = false,
            readOnly = false,
            disabled = false,
            note,
            validate = validateEmail,
        },
        ref,
    ) => {
        const [value2, setValue] = useState('');
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
                <div className={cx('content', { error: error })}>
                    <input
                        ref={ref}
                        type={type}
                        name={name}
                        id={name}
                        required={required}
                        placeholder=" "
                        spellCheck={spellCheck}
                        readOnly={readOnly}
                        disabled={disabled}
                        value={value}
                        onChange={onChange}
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
    },
);

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
