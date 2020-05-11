import React from 'react';
import { Button, Card, CardContent, MenuItem } from '@material-ui/core';
import { Grid, Box, Heading, Stack } from '@chakra-ui/core';
import { useFetch } from 'core/fetch';
import { Routes, Route, Link } from 'react-router-dom';
import { Form, FormDate, FormInput, FormSelect } from 'core/signup';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const Grids = () => {
  return (
    <div>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(1),
  },
  textField: {
    width: '100ch',
  },
}));

const Login = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Card>
      <CardContent>
        <Stack spacing={3} textAlign="center" mb="30px" mt="30px" as="h1">
          <Heading isTruncated fontSize="100px" fontFamily="Perpetua">
            Log In
          </Heading>
          <Heading isTruncated fontSize="20px" fontFamily="Perpetua">
            Already have a DocMora account? Log In
          </Heading>
        </Stack>
        <Form
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(data) => {
            console.log('Login Successful');
            alert(JSON.stringify(data, null, 2));
          }}
        >
          <Grid templateColumns="repeat(1, 1fr)" gap={6} mb="1rem">
            <FormInput name="email" label="Email" type="email" />
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          </Grid>
          <Grid justifyContent="center">
            <Button size="large" color="secondary" variant="contained" type="submit">
              Log In
            </Button>
          </Grid>
        </Form>
      </CardContent>
    </Card>
  );
};

const SignUp = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Card>
      <CardContent>
        <Stack spacing={3} textAlign="center" mb="30px" mt="30px" as="h1">
          <Heading isTruncated fontSize="100px" fontFamily="Perpetua">
            Sign Up
          </Heading>
          <Heading isTruncated fontSize="20px" fontFamily="Perpetua">
            Already have a DocMora account? Log In
          </Heading>
        </Stack>
        <Form
          initialValues={{
            name: '',
            email: '',
            emailAgain: '',
            methods: '',
            date: Date.now(),
          }}
          onSubmit={(data) => {
            console.log('Form submitted');
            alert(JSON.stringify(data, null, 2));
          }}
        >
          <Grid templateColumns="repeat(1, 1fr)" gap={6} mb="1rem">
            <FormInput name="name" label="Name" />
            <FormDate name="date" label="Birthday" />
            <FormSelect name="gender" label="Gender">
              <MenuItem value="">
                <em>Other</em>
              </MenuItem>
              <MenuItem>Male</MenuItem>
              <MenuItem>Female</MenuItem>
            </FormSelect>
            <FormInput name="email" label="Email" type="email" />
            <FormInput name="emailAgain" label="Type your email again" type="email" />
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          </Grid>
          <Grid justifyContent="center">
            <Button size="large" color="secondary" variant="contained" type="submit">
              Sign Up
            </Button>
          </Grid>
        </Form>
      </CardContent>
    </Card>
  );
};

const Components = () => {
  return (
    <div>
      <Button variant="contained" color="primary">
        <Link to="/">Components</Link>
      </Button>{' '}
      <Button variant="contained" color="secondary">
        <Link to="/data">Data Loading</Link>
      </Button>
    </div>
  );
};

const DataView = () => {
  const data = useFetch({ url: '/example/all' });
  return <div>{data}</div>;
};

function App() {
  return (
    <div>
      <Box mt="1rem">
        <Routes>
          <Route path="/" element={<Components />} />
          <Route path="/grids" element={<Grids />} />
          <Route path="/data" element={<DataView />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
