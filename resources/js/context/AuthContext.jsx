import { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
    const [role, setRole] = useState(localStorage.getItem('role') || '');

    const handleLogin = (token, userRole) => {
        localStorage.setItem('token', token);
        localStorage.setItem('role', userRole);
        setIsAuthenticated(true);
        setRole(userRole);
        const nextUrl = localStorage.getItem('nextUrl');
        if (nextUrl) {
            window.location.href = nextUrl;
            localStorage.removeItem('nextUrl');
        }
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
