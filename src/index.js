import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './Main';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import MaterialThemeProvider from 'core/Layout/theme';
import { Layout } from 'core/Layout';
import { MainLayout } from 'core/Layout/mainIndex';
import { theme } from 'core/theme';
import { FetchBoundary } from 'core/fetch';
import { BrowserRouter } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import DayJsUtils from '@date-io/dayjs';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

const AppWrapper = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  const toggle = () => setDarkMode(!darkMode);
  const a = 3;
  return (
    <React.StrictMode>
      <MaterialThemeProvider darkMode={darkMode}>
        <MuiPickersUtilsProvider utils={DayJsUtils}>
          <ThemeProvider theme={theme}>
            <CSSReset />
            <BrowserRouter>
              {a === 3 && (
                <Layout darkMode={darkMode} toggleDarkMode={toggle}>
                  <FetchBoundary>
                    <App />
                  </FetchBoundary>
                </Layout>
              )}
              {a === 1 && (
                <MainLayout darkMode={darkMode} toggleDarkMode={toggle}>
                  <FetchBoundary>
                    <Main />
                  </FetchBoundary>
                </MainLayout>
              )}
              {a === 2 && <div>Sign Up</div>}
            </BrowserRouter>
          </ThemeProvider>
        </MuiPickersUtilsProvider>
      </MaterialThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
