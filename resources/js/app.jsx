import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import GlobalStyles from './components/GlobalStyles';
import { EffectProvider } from './context/EffectContext';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(
    <React.StrictMode>
        <GlobalStyles>
            <AuthProvider>
                <EffectProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </EffectProvider>
            </AuthProvider>
        </GlobalStyles>
    </React.StrictMode>,
);
