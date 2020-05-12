import React from 'react';
import clsx from 'clsx';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  Grid,
  Switch,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { drawerWidth } from './Sidebar';
import logo from './logo.png';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    maxWidth: 200,
  },
  hide: {
    display: 'none',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    zIndex: theme.zIndex.drawer + 1,
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
          onClick={props.handleDrawerToggle}
          edge="start"
          className={clsx(classes.menuButton)}
        >
          <Menu />
        </IconButton>
        <img src={logo} alt="logo" className={classes.logo} />
        <Typography className={classes.title}></Typography>
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>Dark</Grid>
            <Grid item>
              <Switch checked={!props.darkMode} onChange={props.toggleDarkMode} color="secondary" />
            </Grid>
            <Grid item>Light</Grid>
          </Grid>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
