import { createContext, useEffect, useState } from 'react';
import { getProfile } from '~/services/profileService';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
    const [role, setRole] = useState(localStorage.getItem('role') || '');
    const [userId, setUserId] = useState(localStorage.getItem('userId') || '');
    const [profile, setProfile] = useState({});

    useEffect(() => {
        const fetchProfile = async () => {
            const resonse = await getProfile(userId);
            setProfile(resonse.profile);
        };

        if (userId) {
            fetchProfile();
        } else {
            setProfile({});
        }
    }, [userId]);

    const handleLogin = (token, userRole, user_id) => {
        localStorage.setItem('token', token);
        localStorage.setItem('role', userRole);
        localStorage.setItem('userId', user_id);
        setIsAuthenticated(true);
        setRole(userRole);
        setUserId(user_id);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('userId');
        setIsAuthenticated(false);
        setRole('');
        setUserId('');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, role, userId, profile, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
