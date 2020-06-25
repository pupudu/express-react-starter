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
import { Box } from '@chakra-ui/core';
import { Routes, Route } from 'react-router-dom';
import { SignUpForm } from './SignUpForm';
import { LoginForm } from './LoginForm';

const MainHome = () => {
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
          >
            Register
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<LockOpenIcon />}
          >
            Login
          </Button>
        </CardActions>
      </div>
    </div>
  );
};
function Main() {
  return (
    <div>
      <Box mt="1rem">
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Box>
    </div>
  );
}
export default Main;
