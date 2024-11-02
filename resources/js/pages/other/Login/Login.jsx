import classNames from 'classnames/bind';

import styles from './Login.module.scss';
import { Input } from '~/components/Input';
import { useContext, useState } from 'react';
import { Button } from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Image } from '~/components/Image';
import images from '~/assets/images';
import { Link, useNavigate } from 'react-router-dom';
import config from '~/config';
import { CheckboxInput } from '~/components/Checkbox';
import { AuthContext } from '~/context/AuthContext';

const cx = classNames.bind(styles);

const Login = () => {
    const { handleLogin } = useContext(AuthContext);
    const [account, setAccount] = useState({ email: '', password: '' });
    const [show, setShow] = useState(false);
    const [save, setSave] = useState(false);
    const [error, setError] = useState({ email: '', password: '' });

    console.log(account);
    console.log(error);

    const setEmail = (e) => {
        setAccount((prev) => ({ ...prev, email: e.target.value }));
    };

    const setPassword = (e) => {
        setAccount((prev) => ({ ...prev, password: e.target.value }));
    };

    const setEmailError = (error) => {
        setError((prev) => ({ ...prev, email: error }));
    };

    const setPasswordError = (error) => {
        setError((prev) => ({ ...prev, password: error }));
    };

    const validateEmail = (email) => {
        if (email > 0) return 'loi';
    };

    const onLogin = async () => {
        try {
            const response = await axios.post('/api/login', { email: account.email, password: account.password });
            if (response.status === 200) {
                handleLogin(response.data.token, response.data.role);
            } else {
                if (response.data.type === 'email') {
                    setEmailError(response.data.message);
                } else if (response.data.type === 'password') {
                    setPasswordError(response.data.message);
                }
            }
        } catch (error) {
            console.log('Lỗi đăng nhập: ', error);
        }
    };

    return (
        <div className={cx('login')}>
            <div className={cx('left')}>
                <Image src={images.logo} width="250px" height="250px" />
            </div>

            <div className={cx('right')}>
                <div className={cx('login-box')}>
                    <div className={cx('title')}>Đăng nhập</div>

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

                    <div className={cx('password-container')}>
                        <Input
                            value={account.password}
                            name="password"
                            type={show ? 'text' : 'password'}
                            onChange={setPassword}
                            label="Mật khẩu"
                            required
                            error={error.password}
                            clearError={() => setPasswordError('')}
                        />

                        <button type="button" className={cx('show-btn')} onClick={() => setShow((prev) => !prev)}>
                            <FontAwesomeIcon icon={show ? faEye : faEyeSlash} />
                        </button>
                    </div>

                    <div className={cx('options')}>
                        <CheckboxInput
                            title="Ghi nhớ đăng nhập"
                            name="save-login"
                            id="save-login"
                            checked={save}
                            onChange={() => setSave((prev) => !prev)}
                        />
                        <a className={cx('forgot')} href="/">
                            Quên mật khẩu
                        </a>
                    </div>

                    <Button primaryBorder width="100%" contentCenter large onClick={onLogin}>
                        Đăng nhập
                    </Button>

                    <div className={cx('other')}>
                        <div className={cx('line')}>
                            <span>Hoặc</span>
                        </div>

                        <Button className={cx('logo-btn')} width="50%" outline contentCenter>
                            <Image className={cx('logo-icon')} src={images.logoFacebook} />
                            <span className="mobile-hidden">Facebook</span>
                        </Button>
                        <Button className={cx('logo-btn')} width="50%" outline contentCenter>
                            <Image className={cx('logo-icon')} src={images.logoGoogle} />
                            <span className="mobile-hidden">Google</span>
                        </Button>
                    </div>

                    <div className={cx('register')}>
                        <span>Đây là lần đầu của bạn?</span>
                        <Link className={cx('register-btn')} to={config.routes.other.register}>
                            Đăng ký
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
