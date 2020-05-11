import React from 'react';
import { AccessAlarm, AddAPhoto, AllOut } from '@material-ui/icons';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
export default [
  [
    { to: '/', text: 'Components', Icon: <AccessAlarm /> },
    { to: '/data', text: 'Data View', Icon: <AddAPhoto /> },
  ],
  [
    { to: '/grids', text: 'Grids', Icon: <AllOut /> },
    { to: '/signup', text: 'Sign Up', Icon: <LockIcon /> },
    { to: '/login', text: 'Log In', Icon: <LockOpenIcon /> },
  ],
];
