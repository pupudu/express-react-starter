import React, { useState } from 'react';
import { Button, Card, CardContent, MenuItem } from '@material-ui/core';
import { Grid, Box, Heading, Stack } from '@chakra-ui/core';
import { Routes, Route } from 'react-router-dom';
import { Form, FormDate, FormInput, FormSelect } from 'core/signup';
import { Home } from './Home';
import { Pricing } from './Pricing';
import { DataView } from './DataView';
import { fetch } from './core/fetch';
import { Alert } from '@material-ui/lab';

const Login = () => {
  const [showAlert, setShowAlert] = useState(false);
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
          onSubmit={async (data) => {
            const res = await fetch({
              url: '/user/login',
              method: 'post',
              body: data,
            });
            if (res === 'success') {
              window.location.pathname = '/';
            }
          }}
        >
          <Grid templateColumns="repeat(1, 1fr)" gap={6} mb="1rem" mb="1rem" ml="25%" mr="25%">
            <FormInput name="email" label="Email" type="email" />
            <FormInput type="password" label="Password" name="password" labelWidth={70} />
            {showAlert && <Alert severity="success">This is a success alert — check it out!</Alert>}
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
  const [showAlert, setShowAlert] = useState(false);
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
            birthday: Date.now(),
            gender: '',
          }}
          onSubmit={async (data) => {
            const res = await fetch({
              url: '/user/signup',
              method: 'post',
              body: data,
            });
            if (res.status === 'success') {
              setShowAlert(true);
              setTimeout(() => {
                setShowAlert(false);
              }, 5000);
            }
          }}
        >
          <Grid templateColumns="repeat(1, 1fr)" gap={6} mb="1rem" ml="25%" mr="25%">
            <FormInput name="name" label="Name" />
            <FormDate name="birthday" label="Birthday" />
            <FormSelect name="gender" label="Gender">
              <MenuItem value="">
                <em>Other</em>
              </MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </FormSelect>
            <FormInput name="email" label="Email" type="email" />
            <FormInput name="emailAgain" label="Type your email again" type="email" />
            <FormInput
              type="password"
              label="Password"
              id="outlined-adornment-password"
              name="password"
              labelWidth={70}
            />
            {showAlert && <Alert severity="success">This is a success alert — check it out!</Alert>}
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

function App() {
  return (
    <div>
      <Box mt="1rem">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/data" element={<DataView />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Box>
    </div>
  );
}
export default App;
