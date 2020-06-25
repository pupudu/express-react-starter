import React from 'react';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import HomeIcon from '@material-ui/icons/Home';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
export default [
  [
    { to: '/', text: 'Home', Icon: <HomeIcon /> },
    { to: '/data', text: 'Documents', Icon: <InsertDriveFileIcon /> },
  ],
  [{ to: '/pricing', text: 'Pricing', Icon: <MonetizationOnIcon /> }],
];
