import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './state/reducer';
import { Provider } from 'react-redux';
import '@fontsource/nunito-sans';
import '@fontsource/inter';

const store = configureStore({ reducer });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
