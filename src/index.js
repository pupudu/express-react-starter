import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './user/App';
import { MainHome } from './home';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import MaterialThemeProvider from 'core/Layout/theme';
import { Layout } from 'core/Layout';
import { UserLayout } from 'core/Layout/user';
import { theme } from 'core/theme';
import { FetchBoundary, useFetch } from 'core/fetch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import DayJsUtils from '@date-io/dayjs';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Signup } from './signup';
import { Signin } from './signin';

const AppWrapper = (props) => {
  const { darkMode, toggle } = props;
  const data = useFetch({ url: '/api/user/isauthenticated' });

  if (window.location.pathname === '/') {
    window.location.pathname = '/app';
    return <div></div>;
  }
  if (data.session === false) {
    if (!['/login', '/signup', '/home'].includes(window.location.pathname)) {
      window.location.pathname = '/home';
      return <div></div>;
    }
  } else {
    if (['/login', '/signup', '/home'].includes(window.location.pathname)) {
      window.location.pathname = '/app';
      return <div></div>;
    }
  }

  return (
    <>
      <FetchBoundary>
        <Routes>
          <Route
            path="/app/*"
            element={
              <UserLayout darkMode={darkMode} toggleDarkMode={toggle}>
                <App />
              </UserLayout>
            }
          />
        </Routes>
      </FetchBoundary>

      <FetchBoundary>
        <Routes>
          <Route
            path="/home"
            element={
              <Layout darkMode={darkMode} toggleDarkMode={toggle}>
                <MainHome />
              </Layout>
            }
          />
          <Route
            path="/signup"
            element={
              <Layout darkMode={darkMode} toggleDarkMode={toggle}>
                <Signup />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout darkMode={darkMode} toggleDarkMode={toggle}>
                <Signin />
              </Layout>
            }
          />
        </Routes>
      </FetchBoundary>
    </>
  );
};

const AppSuspence = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  const toggle = () => setDarkMode(!darkMode);
  return (
    <React.StrictMode>
      <MaterialThemeProvider darkMode={darkMode}>
        <MuiPickersUtilsProvider utils={DayJsUtils}>
          <ThemeProvider theme={theme}>
            <CSSReset />
            <BrowserRouter>
              <FetchBoundary>
                <AppWrapper toggle={toggle} darkMode={darkMode} />
              </FetchBoundary>
            </BrowserRouter>
          </ThemeProvider>
        </MuiPickersUtilsProvider>
      </MaterialThemeProvider>
    </React.StrictMode>
  );
};
ReactDOM.render(<AppSuspence />, document.getElementById('root'));
