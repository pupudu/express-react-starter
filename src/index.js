import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MaterialThemeProvider from './core/Layout/theme';
import { Layout } from './core/Layout';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { theme } from './core/theme';
import { FetchBoundary } from './core/fetch';
import { BrowserRouter } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';

const AppWrapper = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  const toggle = () => setDarkMode(!darkMode);

  return (
    <React.StrictMode>
      <MaterialThemeProvider darkMode={darkMode}>
        <ThemeProvider theme={theme}>
          <CSSReset />
          <BrowserRouter>
            <Layout darkMode={darkMode} toggleDarkMode={toggle}>
              <FetchBoundary>
                <App />
              </FetchBoundary>
            </Layout>
          </BrowserRouter>
        </ThemeProvider>
      </MaterialThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
