import { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
    const [role, setRole] = useState(localStorage.getItem('role') || '');

    const handleLogin = (token, userRole, userId) => {
        localStorage.setItem('token', token);
        localStorage.setItem('role', userRole);
        localStorage.setItem('userId', userId);
        setIsAuthenticated(true);
        setRole(userRole);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        setIsAuthenticated(false);
        setRole('');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, role, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
