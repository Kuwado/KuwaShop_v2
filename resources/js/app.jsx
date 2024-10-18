import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import GlobalStyles from './components/GlobalStyles';
import { EffectProvider } from './context/EffectContext';

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(
    <React.StrictMode>
        <GlobalStyles>
            <EffectProvider>
                <App />
            </EffectProvider>
        </GlobalStyles>
    </React.StrictMode>,
);
