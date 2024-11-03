import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './PasswordInput.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Input from '../Input';

const cx = classNames.bind(styles);

const PasswordInput = ({ value, name, onChange, label, required, error, clearError }) => {
    const [show, setShow] = useState(false);

    return (
        <div className={cx('password-input')}>
            <Input
                value={value}
                name={name}
                type={show ? 'text' : 'password'}
                onChange={onChange}
                label={label}
                required={required}
                error={error}
                clearError={clearError}
            />

            <button type="button" className={cx('show-btn')} onClick={() => setShow((prev) => !prev)}>
                <FontAwesomeIcon icon={show ? faEye : faEyeSlash} />
            </button>
        </div>
    );
};

export default PasswordInput;
