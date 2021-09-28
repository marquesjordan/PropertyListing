import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider as PropertyProvider} from './context/properties/PropertyContext';

ReactDOM.render(
  <React.StrictMode>
    <PropertyProvider>
      <App />
    </PropertyProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
