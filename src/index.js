import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MaterialThemeProvider from './core/Layout/theme';
import { Layout } from './core/Layout';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { theme } from './core/theme';
import { FetchBoundary } from './core/fetch';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <MaterialThemeProvider>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <BrowserRouter>
          <Layout>
            <FetchBoundary>
              <App />
            </FetchBoundary>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </MaterialThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
