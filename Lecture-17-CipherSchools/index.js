import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* calling App Function */}
    {/* rendering App Function 2 times displays 2 outputs */}
    <App />
    <App />
  </React.StrictMode>
);
reportWebVitals();
