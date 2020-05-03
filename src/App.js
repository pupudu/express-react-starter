import React from 'react';
import { Button } from '@material-ui/core';
import { Grid, Box } from '@chakra-ui/core';
import { useFetch } from './core/fetch';
import { Routes, Route, Link } from 'react-router-dom';

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
        </Routes>
      </Box>
    </div>
  );
}

export default App;
