import Typography from '@material-ui/core/Typography';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { Button } from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import React from 'react';
import { useStyles } from './styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export const MainHome = () => {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={5} className={classes.mainImage} />
      <Grid item xs={12} sm={7} component={Paper} elevation={6} square>
        <div className={classes.paperContainer}>
          <Typography variant="h1" gutterBottom className={classes.homeHeading}>
            Welcome to MoraDoc Translator
          </Typography>
          <Typography variant="h6" gutterBottom className={classes.homeParagraph}>
            <AssignmentTurnedInIcon className={classes.homeContentIcon} />
            100% customer satisfaction
            <br />
            <AssignmentTurnedInIcon className={classes.homeContentIcon} />
            Document Format Preservation
          </Typography>
          <div className={classes.buttonRow}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<InputIcon />}
              href="/signup"
            >
              Register
            </Button>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              className={classes.button}
              startIcon={<LockOpenIcon />}
              href="/login"
            >
              Login
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
