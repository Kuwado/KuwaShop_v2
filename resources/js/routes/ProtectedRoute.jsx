import { Navigate } from 'react-router-dom';
import config from '~/config';

const ProtectedRoute = ({ isAuthenticated, nextUrl, children }) => {
    if (!isAuthenticated) {
        localStorage.setItem('nextUrl', nextUrl);
        return <Navigate to={config.routes.other.login} />;
    }
    return children;
};

export default ProtectedRoute;
