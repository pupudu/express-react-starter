
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
      {routes.map((list, index) => (
        <React.Fragment key={index}>
          <Divider />
          <List>
            {list.map((item, index) => (
              <Link to={`/app/${item.to}`} key={index}>
                <ListItem button>
                  <ListItemIcon>{item.Icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </React.Fragment>
      ))}
    </Drawer>
  );
}
