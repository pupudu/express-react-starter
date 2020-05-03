import React from 'react';
import { AccessAlarm, AddAPhoto, AllOut, ApartmentRounded } from '@material-ui/icons';

export default [
  [
    { to: '/', text: 'Components', Icon: <AccessAlarm /> },
    { to: '/data', text: 'Data View', Icon: <AddAPhoto /> },
  ],
  [
    { to: '/grids', text: 'Grids', Icon: <AllOut /> },
    { to: '/forms', text: 'Forms', Icon: <ApartmentRounded /> },
  ],
];
