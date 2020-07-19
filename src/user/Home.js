import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import React from 'react';
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

export const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.homePageMainContainer}>
      <Grid item container elevation={6} square className={classes.mainImage}>
        <Typography variant="h1" gutterBottom className={classes.mainHeading}>
          Welcome to MoraDoc Translator
        </Typography>
        <Typography variant="h6" gutterBottom className={classes.mainParagraph}>
          <AssignmentTurnedInIcon className={classes.homeContentIcon} />
          100% customer satisfaction
          <br />
          <AssignmentTurnedInIcon className={classes.homeContentIcon} />
          Document Format Preservation
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          className={classes.button}
          startIcon={<InputIcon />}
          href="/signup"
        >
          Explore More
        </Button>
      </Grid>
      <div className={classes.exploreSection}>
        <Grid container component="main" className={classes.root}>
          <Grid item sm={false} md={5} className={classes.secondaryImage} />
          <Grid item sm={12} md={7} component={Paper} elevation={6} square>
            <div className={classes.paperContainer}>
              <Typography variant="h1" gutterBottom className={classes.secondaryHeading}>
                Ready to get started?
              </Typography>
              <Typography variant="h6" gutterBottom className={classes.secondaryParagraph}>
                Translate instantly using our order form.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                className={classes.button}
                startIcon={<InputIcon />}
                href="/signup"
              >
                Order Online
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
