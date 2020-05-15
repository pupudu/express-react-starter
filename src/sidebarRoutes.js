import React from 'react';
import { AddAPhoto, AllOut } from '@material-ui/icons';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import HomeIcon from '@material-ui/icons/Home';
export default [
  [
    { to: '/', text: 'Home', Icon: <HomeIcon /> },
    { to: '/data', text: 'Data View', Icon: <AddAPhoto /> },
  ],
  [
    { to: '/pricing', text: 'Pricing', Icon: <AllOut /> },
    { to: '/signup', text: 'Sign Up', Icon: <LockIcon /> },
    { to: '/login', text: 'Log In', Icon: <LockOpenIcon /> },
  ],
];
