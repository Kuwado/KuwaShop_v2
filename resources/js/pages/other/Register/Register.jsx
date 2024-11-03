import classNames from 'classnames/bind';

import styles from './Register.module.scss';
import Account from './Account';
import Profile from './Profile';
import { useContext, useEffect, useState } from 'react';
import { OutInTransition } from '~/animations/Transition';
import Avatar from './Avatar';
import { AuthContext } from '~/context/AuthContext';

const cx = classNames.bind(styles);

const Register = () => {
    const { handleLogout } = useContext(AuthContext);
    const [step, setStep] = useState(1);
    const [account, setCurrentAccount] = useState({ email: '', password: '' });
    const [avatar, setAvatar] = useState('');
    const [userId, setUserId] = useState('');

    useEffect(() => {
        handleLogout();
    }, []);

    return (
        <div className={cx('register')}>
            <OutInTransition state={step}>
                <div className={cx('content')}>
                    {step === 1 ? (
                        <Account setUerId={setUserId} setCurrentAccount={setCurrentAccount} setStep={setStep} />
                    ) : step === 2 ? (
                        <Avatar setAvatar={setAvatar} setStep={setStep} />
                    ) : (
                        <Profile account={account} avatar={avatar} userId={userId} />
                    )}
                </div>
            </OutInTransition>
        </div>
    );
};

export default Register;
