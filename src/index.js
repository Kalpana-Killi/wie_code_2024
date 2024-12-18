import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; // Assuming your App.js is in the component folder
import './index.css'; // Optional, if you have global styles



const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
