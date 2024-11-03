import classNames from 'classnames/bind';

import styles from './Account.module.scss';
import { Input, PasswordInput } from '~/components/Input';
import { useState } from 'react';
import { CheckboxInput } from '~/components/Checkbox';
import { Button } from '~/components/Button';
import { createUser } from '~/services/profileService';

const cx = classNames.bind(styles);

const Account = ({ setStep, setUerId, setCurrentAccount }) => {
    const [account, setAccount] = useState({ email: '', password: '', passwordAgain: '' });
    const [error, setError] = useState({ email: '', password: '' });
    const [agree, setAgree] = useState(false);

    const setEmail = (e) => {
        setAccount((prev) => ({ ...prev, email: e.target.value }));
    };

    const setPassword = (e) => {
        setAccount((prev) => ({ ...prev, password: e.target.value }));
    };

    const setPasswordAgain = (e) => {
        setAccount((prev) => ({ ...prev, passwordAgain: e.target.value }));
    };

    const setEmailError = (error) => {
        setError((prev) => ({ ...prev, email: error }));
    };

    const setPasswordError = (error) => {
        setError((prev) => ({ ...prev, password: error }));
    };

    const handleNextStep = async () => {
        if (account.password !== account.passwordAgain) {
            setPasswordError('Mật khẩu không khớp');
        } else if (!agree) {
            alert('Vui lòng xác nhận điều khoản');
        } else if (!error.email && !error.password) {
            const response = await createUser(account);
            if (response.error) {
                setEmailError(response.message);
            } else {
                setUerId(response.user.id);
                setCurrentAccount({ email: account.email, password: account.password });
                setStep(2);
            }
        }
    };

    return (
        <div className={cx('register-account')}>
            <div className={cx('title')}>Đăng ký</div>

            <div className={cx('body')}>
                <Input
                    value={account.email}
                    name="email"
                    type="email"
                    onChange={setEmail}
                    label="Tên đăng nhập"
                    required
                    error={error.email}
                    clearError={() => setEmailError('')}
                />

                <PasswordInput
                    value={account.password}
                    name="password"
                    onChange={setPassword}
                    label="Mật khẩu"
                    required
                />

                <PasswordInput
                    value={account.passwordAgain}
                    name="password-agin"
                    onChange={setPasswordAgain}
                    label="Nhập lại mật khẩu"
                    required
                    error={error.password}
                    clearError={() => setPasswordError('')}
                />

                <CheckboxInput
                    title="Đồng ý với các điều khoản của KuwaShop"
                    name="agree"
                    id="agree"
                    checked={agree}
                    onChange={() => setAgree((prev) => !prev)}
                />
            </div>

            <div className={cx('next-btn')}>
                <Button primaryBorder large contentCenter width="100%" onClick={handleNextStep}>
                    Tạo tài khoản
                </Button>
            </div>
        </div>
    );
};

export default Account;
