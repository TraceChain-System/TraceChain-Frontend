import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {
  AdminDashboard,
  OrganizationPage,
  TemplatesPage,
  ItemTypesPage,
  PicklistsPage,
  RelationshipsPage,
  WorkflowsPage,
  LookupMatricesPage,
  PermissionsPage,
  UsersPage,
} from './pages';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to admin dashboard */}
        <Route path="/" element={<Navigate to="/admin" replace />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/organization" element={<OrganizationPage />} />
        <Route path="/admin/templates" element={<TemplatesPage />} />
        <Route path="/admin/item-types" element={<ItemTypesPage />} />
        <Route path="/admin/picklists" element={<PicklistsPage />} />
        <Route path="/admin/relationships" element={<RelationshipsPage />} />
        <Route path="/admin/workflows" element={<WorkflowsPage />} />
        <Route path="/admin/lookup-matrices" element={<LookupMatricesPage />} />
        <Route path="/admin/permissions" element={<PermissionsPage />} />
        <Route path="/admin/users" element={<UsersPage />} />
        
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
