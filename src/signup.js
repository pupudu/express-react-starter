import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Form, FormDate, FormInput, FormSelect } from './core/signup';
import { fetch } from './core/fetch';
import { Alert } from '@material-ui/lab';
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import MenuItem from '@material-ui/core/MenuItem';

export const Signup = () => {
  const [showAlert, setShowAlert] = useState(false);
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <Grid item sm={false} md={6} className={classes.loginImage} />
      <Grid item sm={12} md={6} component={Paper} elevation={6} square>
        <div className={classes.loginPaperContainer}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Form
            className={classes.form}
            initialValues={{
              name: '',
              email: '',
              emailAgain: '',
              birthday: Date.now(),
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
            <FormInput name="name" label="Name" className={classes.formContent} />
            <FormDate name="birthday" label="Birthday" className={classes.formContent} />
            <FormSelect name="signinAs" label="Sign in As" className={classes.formContent}>
              <MenuItem value="client">Client</MenuItem>
              <MenuItem value="translator">Translator</MenuItem>
              <MenuItem value="itspecialist">IT Specialist</MenuItem>
            </FormSelect>
            <FormInput name="email" label="Email" type="email" className={classes.formContent} />
            <FormInput
              type="password"
              label="Password"
              id="outlined-adornment-password"
              name="password"
              labelWidth={70}
              className={classes.formContent}
            />
            {showAlert && <Alert severity="success">This is a success alert — check it out!</Alert>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/login">{'Already have an account? Sign In'}</Link>
              </Grid>
            </Grid>
          </Form>
        </div>
      </Grid>
    </Grid>
  );
};
