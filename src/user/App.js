import React from 'react';
import { Box } from '@chakra-ui/core';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Pricing } from './Pricing';
import { MyOrders } from './MyOrders';
import { OrderNow } from './OrderNow';
import { CustomerSupport } from './CustomerSupport';

function App() {
  return (
    <div>
      <Box mt="1rem">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/allOrders" element={<MyOrders />} />
          <Route path="/order" element={<OrderNow />} />
          <Route path="/support" element={<CustomerSupport />} />
        </Routes>
      </Box>
    </div>
  );
}
export default App;
