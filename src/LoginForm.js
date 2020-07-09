import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Heading, Stack } from '@chakra-ui/core';
import { Form, FormInput } from './core/signup';
import { fetch } from './core/fetch';
import { Alert } from '@material-ui/lab';
import CardContent from '@material-ui/core/CardContent';
import { useStyles } from './mainStyles';
import log from './images/log.JPG';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export const LoginForm = () => {
  const [showAlert] = useState(false);
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
            <Stack spacing={3} textAlign="center" mb="30px" mt="100px" as="h1">
              <Heading isTruncated fontSize="100px" fontFamily="Times New Roman">
                Log In
              </Heading>
              <Heading isTruncated>
                <Typography className={classes.headerContent}>
                  Don't have an account yet?&nbsp;
                  <Link href="/signup" color="inherit">
                    Sign Up
                  </Link>
                </Typography>
              </Heading>
            </Stack>
            <Form
              initialValues={{
                email: '',
                password: '',
              }}
              onSubmit={async (data) => {
                const res = await fetch({
                  url: '/api/user/login',
                  method: 'post',
                  body: data,
                });
                if (res === 'success') {
                  window.location.pathname = '/';
                } else {
                  console.log(res);
                }
              }}
            >
              <Grid justifyContent="center" width="100px">
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
                  name="password"
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
                  Log In
                </Button>
              </Grid>
            </Form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
