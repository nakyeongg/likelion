import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import './assets/scss/style.scss';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
