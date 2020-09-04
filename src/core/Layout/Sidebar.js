import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import routes from '../../user/sidebarRoutes';
import { useFetch } from '../fetch';

export const drawerWidth = 240;

export const useStyles = makeStyles(() => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    paddingTop: '100px',
  },
}));

export function Sidebar(props) {
  const userInformation = useFetch({ url: '/api/user/get-user-information' });
  const currentUserType = userInformation.signinAs;
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={props.open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      {Object.keys(routes).map((type) =>
        type === currentUserType
          ? routes[type].map((item, index) => (
              <React.Fragment key={index}>
                <Divider />
                <List>
                  <Link to={`/app/${item.to}`} key={index}>
                    <ListItem button>
                      <ListItemIcon>{item.Icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  </Link>
                </List>
              </React.Fragment>
            ))
          : null,
      )}
    </Drawer>
  );
}
