import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Navigate } from 'react-router';
import App from './App';
import { MainHome } from './Main';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import MaterialThemeProvider from 'core/Layout/theme';
import { Layout } from 'core/Layout';
import { MainLayout } from 'core/Layout/mainIndex';
import { theme } from 'core/theme';
import { FetchBoundary, useFetch } from 'core/fetch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import DayJsUtils from '@date-io/dayjs';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { SignUpForm } from './SignUpForm';
import { LoginForm } from './LoginForm';

const AppWrapper = (props) => {
  const { darkMode, toggle } = props;
  const data = useFetch({ url: '/api/user/isauthenticated' });
  console.log(data);

  if (window.location.pathname === '/') {
    window.location.pathname = '/app';
    return <div></div>;
  }
  if (data.session === false) {
    if (!['/login', '/signup', '/home'].includes(window.location.pathname)) {
      window.location.pathname = '/login';
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
              <Layout darkMode={darkMode} toggleDarkMode={toggle}>
                <App />
              </Layout>
            }
          />
        </Routes>
      </FetchBoundary>

      <FetchBoundary>
        <Routes>
          <Route
            path="/home"
            element={
              <MainLayout darkMode={darkMode} toggleDarkMode={toggle}>
                <MainHome />
              </MainLayout>
            }
          />
          <Route
            path="/signup"
            element={
              <MainLayout darkMode={darkMode} toggleDarkMode={toggle}>
                <SignUpForm />
              </MainLayout>
            }
          />
          <Route
            path="/login"
            element={
              <MainLayout darkMode={darkMode} toggleDarkMode={toggle}>
                <LoginForm />
              </MainLayout>
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
