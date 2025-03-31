import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/pages/homepage.jsx'
import Login from './components/pages/login.jsx'

function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/login" element={<Login />} />
  </Routes>
</Router>
  )
}

export default App
