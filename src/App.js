import React from 'react';
import { Button, Card, CardContent, MenuItem } from '@material-ui/core';
import { Grid, Box } from '@chakra-ui/core';
import { useFetch } from 'core/fetch';
import { Routes, Route, Link } from 'react-router-dom';
import { Form, FormDate, FormInput, FormSelect } from 'core/forms';

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

const Forms = () => {
  return (
    <Card>
      <CardContent>
        <Form
          initialValues={{
            name: '',
            email: '',
            methods: '',
            date: Date.now(),
          }}
          onSubmit={(data) => {
            console.log('Form submitted');
            alert(JSON.stringify(data, null, 2));
          }}
        >
          <Grid templateColumns="repeat(3, 1fr)" gap={6} mb="1rem">
            <FormInput name="name" label="Name" />
            <FormInput name="email" label="Email Address" type="email" />
            <FormDate name="date" label="Birthday" />
            <FormSelect name="methods" label="Count">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </FormSelect>
          </Grid>
          <Button color="secondary" variant="contained" type="submit">
            Submit
          </Button>
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
          <Route path="/forms" element={<Forms />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
