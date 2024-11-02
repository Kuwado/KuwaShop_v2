import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '~/config';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        // Kiểm tra localStorage để xác định trạng thái xác thực ban đầu
        return localStorage.getItem('token') !== null;
    });
    const [role, setRole] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }

        const role = localStorage.getItem('role');
        if (role) {
            setRole(role);
        } else {
            setRole('');
        }
    }, []);

    return { isAuthenticated, role };
};

export default useAuth;
