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
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import { fetch } from '../fetch';

const useStyles = makeStyles((theme) => ({
  vl: {
    borderLeft: ' 2px solid #CCCCCC',
    height: '20px',
    marginRight: '10px',
  },
  logo: {
    padding: '10px',
    maxWidth: 250,
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
  signOut: {
    marginRight: '20px',
  },
}));

export function UserHeader(props) {
  const classes = useStyles();
  async function onSubmit() {
    const res = await fetch({
      url: '/api/user/logout',
      method: 'get',
    });
    if (res === 'success') {
      window.location.pathname = '/home';
    } else {
      console.log(res);
    }
  }

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
        <a href={'/app'}>
          <img src={logo} alt="logo" className={classes.logo} />{' '}
        </a>
        <Typography className={classes.title}></Typography>
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              className={classes.signOut}
              onClick={onSubmit}
              startIcon={<ExitToAppIcon />}
            >
              Sign Out
            </Button>
          </Grid>
        </Typography>

        <div className={classes.vl}></div>
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>
              <Switch checked={!props.darkMode} onChange={props.toggleDarkMode} color="secondary" />
            </Grid>
          </Grid>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
