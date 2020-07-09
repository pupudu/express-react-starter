import React, { useState } from 'react';
import { Button, Card, CardContent, MenuItem } from '@material-ui/core';
import { Heading, Stack } from '@chakra-ui/core';
import { Form, FormDate, FormInput, FormSelect } from './core/signup';
import { fetch } from './core/fetch';
import { Alert } from '@material-ui/lab';
import { useStyles } from './mainStyles';
import log from './images/log.JPG';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export const SignUpForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const classes = useStyles();
  return (
    <Grid container sm={12}>
      <Grid item sm={4}>
        <Card>
          <CardMedia
            className={classes.cardMedia}
            component="img"
            alt="Contemplative Reptile"
            image={log}
            title="Contemplative Reptile"
          />
        </Card>
      </Grid>
      <Grid item sm={8}>
        <Card>
          <CardContent className={classes.cardContent}>
            <Stack spacing={3} textAlign="center" mb="10px" mt="10px" as="h1">
              <Heading isTruncated fontSize="100px" fontFamily="Times New Roman">
                Sign Up
              </Heading>
              <Heading isTruncated>
                <Typography className={classes.headerContent}>
                  Already have a DocMora account?&nbsp;
                  <Link href="/login" color="inherit">
                    Log In
                  </Link>
                </Typography>
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
                  url: '/api/user/signup',
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
              <Grid justifyContent="center" width="100px">
                <FormInput name="name" label="Name" className={classes.formContent} />
              </Grid>
              <Grid justifyContent="center">
                <FormDate name="birthday" label="Birthday" className={classes.formContent} />
              </Grid>
              <Grid justifyContent="center">
                <FormSelect name="gender" label="Gender" className={classes.formContent}>
                  <MenuItem value="">
                    <em>Other</em>
                  </MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </FormSelect>
              </Grid>
              <Grid justifyContent="center">
                <FormSelect name="signinAs" label="Sign in As" className={classes.formContent}>
                  <MenuItem value="client">Client</MenuItem>
                  <MenuItem value="translator">Translator</MenuItem>
                  <MenuItem value="itspecialist">IT Specialist</MenuItem>
                </FormSelect>
              </Grid>
              <Grid justifyContent="center">
                <FormInput
                  name="email"
                  label="Email"
                  type="email"
                  className={classes.formContent}
                />
              </Grid>
              <Grid justifyContent="center">
                <FormInput
                  type="password"
                  label="Password"
                  id="outlined-adornment-password"
                  name="password"
                  labelWidth={70}
                  className={classes.formContent}
                />
                {showAlert && (
                  <Alert severity="success">This is a success alert — check it out!</Alert>
                )}
              </Grid>
              <Grid justifyContent="center">
                <Button
                  size="large"
                  color="secondary"
                  variant="contained"
                  type="submit"
                  justifyContent="center"
                  className={classes.loginButton}
                >
                  Sign Up
                </Button>
              </Grid>
            </Form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
