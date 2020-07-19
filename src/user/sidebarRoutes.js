import React from 'react';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import HomeIcon from '@material-ui/icons/Home';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
export default [
  [
    { to: '/', text: 'Home', Icon: <HomeIcon /> },
    { to: '/allOrders', text: 'My Orders', Icon: <InsertDriveFileIcon /> },
  ],
  [{ to: '/pricing', text: 'Pricing', Icon: <MonetizationOnIcon /> }],
  [{ to: '/order', text: 'Order Now', Icon: <MonetizationOnIcon /> }],
  [{ to: '/support', text: 'Customer Support', Icon: <MonetizationOnIcon /> }],
];
