import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import TextField from '@material-ui/core/TextField';

export const Support = () => {
  const classes = useStyles();
  return (
    <Grid item container className={classes.csBackgroundImage}>
      <Paper elevation={10} className={classes.paper}>
        <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
          Have any issue?
        </Typography>
        <TextField
          className={classes.requestText}
          id="submit-request"
          label="Submit your request here"
          multiline
          rows={5}
          variant="outlined"
          color="secondary"
        />
        <input style={{ display: 'none' }} id="upload-photo" name="upload-photo" type="file" />
        <Fab color="secondary" component="span" aria-label="add" variant="extended" size="large">
          <ArrowUpwardIcon className={classes.submitButton} /> Submit Request
        </Fab>
      </Paper>
    </Grid>
  );
};
