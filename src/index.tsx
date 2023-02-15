import { render } from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemePrivider';
import App from './app/App';
import 'shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
