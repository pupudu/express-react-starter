import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import upload from '../images/upload.png';
import CustomizedSteppers from './Stepper';

export const OrderNow = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid item container className={classes.orderBackgroundImage}>
        <Paper elevation={10} className={classes.paper}>
          <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
            What would you like to translate ?
          </Typography>
          <img src={upload} alt="upload image" className={classes.uploadImage} />
          <input style={{ display: 'none' }} id="upload-photo" name="upload-photo" type="file" />
          <Fab color="secondary" component="span" aria-label="add" variant="extended" size="large">
            <AddIcon /> Upload File
          </Fab>
        </Paper>
      </Grid>
      <Paper className={classes.statusContainer}>
        <Typography
          variant="h4"
          align="center"
          color="textSecondary"
          component="p"
          className={classes.secondaryHeading}
        >
          Order #number (date)
        </Typography>
        <CustomizedSteppers />
      </Paper>
    </div>
  );
};
