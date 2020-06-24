import React, { useState } from 'react';
import { Button, Card, CardContent } from '@material-ui/core';
import { Grid, Heading, Stack } from '@chakra-ui/core';
import { Form, FormInput } from './core/signup';
import { fetch } from './core/fetch';
import { Alert } from '@material-ui/lab';

export const Login = () => {
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
