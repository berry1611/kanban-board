import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './state/reducer';
import { Provider } from 'react-redux';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from 'config/theme';

const store = configureStore({ reducer });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
