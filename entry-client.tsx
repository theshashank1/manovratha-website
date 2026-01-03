import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

const container = document.getElementById('root');

if (container) {
    ReactDOM.hydrateRoot(
        container,
        <React.StrictMode>
            <HelmetProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </HelmetProvider>
        </React.StrictMode>
    );
} else {
    console.error("Root element not found");
}
