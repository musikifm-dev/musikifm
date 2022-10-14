import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import stores from './store';
import { Provider } from 'react-redux';
import './assets/css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={stores}>
      <App />
    </Provider>
  </React.StrictMode>
);
