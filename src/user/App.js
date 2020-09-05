import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { Pricing } from './Pricing';
import { MyOrders } from './MyOrders';
import { OrderNow } from './OrderNow';
import { CustomerSupport } from './CustomerSupport';
import { ActiveJobs } from './ActiveJobs';
import { AvailableJobs } from './AvailableJobs';
import { ArchivedJobs } from './ArchivedJobs';
import { Order } from './Order';
import { HandleTranslations } from './AllTranslations';
import { Support } from './Support';

function App() {
  return (
    <div>
      <div style={{ marginTop: '1rem' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/myOrders" element={<MyOrders />} />
          <Route path="/orderNow" element={<OrderNow />} />
          <Route path="/support" element={<CustomerSupport />} />
          <Route path="/activeJobs" element={<ActiveJobs />} />
          <Route path="/availableJobs" element={<AvailableJobs />} />
          <Route path="/archivedJobs" element={<ArchivedJobs />} />
          <Route path="/order" element={<Order />} />
          <Route path="/allTranslations" element={<HandleTranslations />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
