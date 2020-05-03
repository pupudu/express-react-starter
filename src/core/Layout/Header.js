import React from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, IconButton, Typography, makeStyles } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { drawerWidth } from './Sidebar';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  title: {
    flexGrow: 1,
  },
}));

export function Header(props) {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: false,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, props.open && classes.hide)}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap>
          Translator Admin
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
