import './core/reset.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './user/App';
import { MainHome } from './Home';
import MaterialThemeProvider from 'core/Layout/theme';
import { Layout } from 'core/Layout';
import { UserLayout } from 'core/Layout/user';
import { FetchBoundary, useFetch } from 'core/fetch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import DayJsUtils from '@date-io/dayjs';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Signup } from './Signup';
import { Signin } from './Signin';

const AppWrapper = (props) => {
  const { darkMode, toggle } = props;
  const data = useFetch({ url: '/api/user/isauthenticated' });
  if (window.location.pathname === '/') {
    window.location.pathname = '/app';
    return null;
  }
  if (data.session === false) {
    if (!['/login', '/signup', '/home'].includes(window.location.pathname)) {
      window.location.pathname = '/home';
      return null;
    }
  } else {
    if (['/login', '/signup', '/home'].includes(window.location.pathname)) {
      window.location.pathname = '/app';
      return null;
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

const AppSuspense = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  const toggle = () => setDarkMode(!darkMode);
  return (
    <React.StrictMode>
      <MaterialThemeProvider darkMode={darkMode}>
        <MuiPickersUtilsProvider utils={DayJsUtils}>
          <BrowserRouter>
            <FetchBoundary>
              <AppWrapper toggle={toggle} darkMode={darkMode} />
            </FetchBoundary>
          </BrowserRouter>
        </MuiPickersUtilsProvider>
      </MaterialThemeProvider>
    </React.StrictMode>
  );
};
ReactDOM.render(<AppSuspense />, document.getElementById('root'));

