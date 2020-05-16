import React from 'react';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import HomeIcon from '@material-ui/icons/Home';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
export default [
  [
    { to: '/', text: 'Home', Icon: <HomeIcon /> },
    { to: '/data', text: 'Documents', Icon: <InsertDriveFileIcon /> },
  ],
  [
    { to: '/pricing', text: 'Pricing', Icon: <MonetizationOnIcon /> },
    { to: '/signup', text: 'Sign Up', Icon: <LockIcon /> },
    { to: '/login', text: 'Log In', Icon: <LockOpenIcon /> },
  ],
];
