import React from 'react';
import clsx from 'clsx';
import { Header } from './Header';
import { makeStyles } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    fontSize: '16px',
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));

export const Layout = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        handleDrawerToggle={handleDrawerToggle}
        open={open}
        darkMode={props.darkMode}
        toggleDarkMode={props.toggleDarkMode}
      />
      <main className={clsx(classes.content)}>{props.children}</main>
    </div>
  );
};
