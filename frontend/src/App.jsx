import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/pages/homepage.jsx'
import Login from './components/pages/login.jsx'
import Estimate from './components/pages/estimate.jsx';
import AdminDashboard from './components/pages/adminDashboard.jsx';
import AdminUsers from './components/pages/adminUsers.jsx';


function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/estimate" element={<Estimate />} />
    <Route path="/admin/dashboard" element={<AdminDashboard />} />
    <Route path="/admin/users" element={<AdminUsers />} />
  </Routes>
</Router>
  )
}

export default App
