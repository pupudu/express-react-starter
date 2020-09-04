import React from 'react';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import HomeIcon from '@material-ui/icons/Home';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

export default {
  client: [
    { to: '/', text: 'Home', Icon: <HomeIcon /> },
    { to: '/myOrders', text: 'My Orders', Icon: <InsertDriveFileIcon /> },
    { to: '/pricing', text: 'Pricing', Icon: <MonetizationOnIcon /> },
    { to: '/orderNow', text: 'Order Now', Icon: <MonetizationOnIcon /> },
    { to: '/support', text: 'Customer Support', Icon: <MonetizationOnIcon /> },
  ],
  translator: [
    { to: '/activeJobs', text: 'Active Jobs', Icon: <MonetizationOnIcon /> },
    { to: '/availableJobs', text: 'Available Jobs', Icon: <MonetizationOnIcon /> },
    { to: '/archivedJobs', text: 'Archived Jobs', Icon: <MonetizationOnIcon /> },
  ],
  itspecialist: [
    { to: '/allTranslations', text: 'All Translations', Icon: <MonetizationOnIcon /> },
    { to: '/support', text: 'Support', Icon: <MonetizationOnIcon /> },
  ],
};
// export default {
//   client: [
//     { to: '/', text: 'Home', Icon: <HomeIcon /> },
//     { to: '/allOrders', text: 'My Orders', Icon: <InsertDriveFileIcon /> },
//     { to: '/pricing', text: 'Pricing', Icon: <MonetizationOnIcon /> },
//     { to: '/orderNow', text: 'Order Now', Icon: <MonetizationOnIcon /> },
//     { to: '/support', text: 'Customer Support', Icon: <MonetizationOnIcon /> },
//   ],
//   translator: [
//     { to: '/activeJobs', text: 'Active Jobs', Icon: <MonetizationOnIcon /> },
//     { to: '/availableJobs', text: 'Available Jobs', Icon: <MonetizationOnIcon /> },
//     { to: '/archivedJobs', text: 'Archived Jobs', Icon: <MonetizationOnIcon /> },
//   ],
//   itspecialist: [
//     { to: '/allTranslations', text: 'All Translations', Icon: <MonetizationOnIcon /> },
//     { to: '/support', text: 'Support', Icon: <MonetizationOnIcon /> },
//   ],
// };
