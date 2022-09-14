import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from './styles/theme';
import FontStyles from './styles/fontStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={baseTheme}>
      <FontStyles />
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
