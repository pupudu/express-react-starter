import cover from './images/backk.jpg';
import { Heading } from '@chakra-ui/core';
import Typography from '@material-ui/core/Typography';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AcUnitSharpIcon from '@material-ui/icons/AcUnitSharp';
import { Button } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import InputIcon from '@material-ui/icons/Input';
import React from 'react';
import { useStyles } from './mainStyles';

export const MainHome = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <img src={cover} alt="cover" className={classes.back} />
      <Heading isTruncated fontSize="80px" className={classes.heading}>
        Welcome to DocMora Translator
      </Heading>
      <Typography gutterBottom className={classes.para}>
        <AcUnitSharpIcon />
        &nbsp; 100% customer satisfaction
        <br />
        <AcUnitSharpIcon />
        &nbsp; Document Format Preservation
      </Typography>
      <div className={classes.cardcontent}>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<InputIcon />}
            href="/signup"
          >
            Register
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<LockOpenIcon />}
            href="/login"
          >
            Login
          </Button>
        </CardActions>
      </div>
    </div>
  );
};
