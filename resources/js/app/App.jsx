import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import { publicRoutes, privateRoutes } from '../routes';
import layouts from '../layouts';
import Effects from './Effects';
import ProtectedRoute from '~/routes/ProtectedRoute';
import { AuthContext } from '~/context/AuthContext';

const App = () => {
    const { isAuthenticated, role, handleLogout } = useContext(AuthContext);
    // handleLogout();

    return (
        <Router>
            <Effects />

            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = layouts.admin.default;

                        if (route.layout === null) {
                            Layout = Fragment; // No layout
                        } else if (route.layout) {
                            Layout = route.layout; // Custom layout if provided
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}

                    {privateRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = layouts.admin.default;

                        if (route.layout === null) {
                            Layout = Fragment; // No layout
                        } else if (route.layout) {
                            Layout = route.layout; // Custom layout if provided
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <ProtectedRoute isAuthenticated={isAuthenticated} nextUrl={route.path}>
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    </ProtectedRoute>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
