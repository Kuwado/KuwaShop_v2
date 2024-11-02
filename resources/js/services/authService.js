import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '~/context/AuthContext';
const fn = () => {};

export const login = async (email, password, onNext, setError = fn) => {
    const { handleLogin } = useContext(AuthContext);
    try {
        const response = await axios.post('/api/login', { email: email, password: password });
        if (response.status === 200) {
            handleLogin(response.data.token, response.data.role);
        } else {
            setError(response.data.message);
        }
    } catch (error) {}
};
