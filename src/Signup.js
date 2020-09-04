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
  const classes = useStyles();

  const languages = ['Sinhala', 'Tamil', 'English'];

  const [showAlert, setShowAlert] = useState(false);
  const [isTranslator, setIsTranslator] = useState(false);
  const [translateFrom, setTranslateFrom] = useState('');
  const [, setTranslateTo] = useState('');
  const [, setSignInAs] = useState('');

  function getTargetLanguage(event) {
    const language = event.target.value;
    setTranslateTo(language);
  }
  function handleChange(event) {
    if (event.target.value === 'translator') {
      setIsTranslator(true);
    } else {
      setIsTranslator(false);
      setTranslateFrom('');
      setTranslateTo('');
    }
    setSignInAs(event.target.value);
  }
  function getSourceLanguage(event) {
    const language = event.target.value;
    setTranslateFrom(language);
  }
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
              signinAs: '',
              translateTo: '',
              translateFrom: '',
              birthday: Date.now(),
            }}
            onSubmit={async (data) => {
              console.log(data);
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
            <FormSelect
              onChange={handleChange}
              name="signinAs"
              label="Sign in As"
              className={classes.formContent}
            >
              <MenuItem value="client">Client</MenuItem>
              <MenuItem value="translator">Translator</MenuItem>
              <MenuItem value="itspecialist">IT Specialist</MenuItem>
            </FormSelect>
            {isTranslator && (
              <FormSelect
                name="translateFrom"
                label="Translate From"
                className={classes.formContent}
                onChange={getSourceLanguage}
              >
                <MenuItem name="english" value="English">
                  English
                </MenuItem>
                <MenuItem name="sinhala" value="Sinhala">
                  Sinhala
                </MenuItem>
                <MenuItem name="tamil" value="Tamil">
                  Tamil
                </MenuItem>
              </FormSelect>
            )}
            {isTranslator && (
              <FormSelect
                name="translateTo"
                label="Translate To"
                className={classes.formContent}
                onChange={getTargetLanguage}
              >
                {languages.map((item) => {
                  if (item !== translateFrom) {
                    return <MenuItem value={item}>{item}</MenuItem>;
                  }
                })}
              </FormSelect>
            )}
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
