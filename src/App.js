import './App.css';
import Home from './pages/Home';
import Layanan from './pages/Layanan';
import DetailLayanan from './pages/DetailLayanan';
import Payment from './pages/Payment';
import User from './pages/User';
import EditProfile from './pages/EditProfile';
import ReadingTest from './pages/ReadingTest';
import Login from './pages/Login';
import Logout from './pages/Logout';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);


  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/layanan'} element={<Layanan />} />
        <Route path={'/detail-layanan'} element={<DetailLayanan/>} />
        <Route path={'/payment'} element={<Payment/>} />
        {/* <Route path={'/payment'} element={isAuth? <Payment/>: <Navigate to="/login" />} />
        <Route path={'/user'} element={isAuth? <User/>: <Navigate to="/login" />} />
        <Route path={'/edit-profile'} element={isAuth? <EditProfile />: <Navigate to="/login" />} /> */}
        <Route path={'/user'} element={<User/>} />
        <Route path={'/edit-profile'} element={<EditProfile />} />
        <Route path={'/reading-test'} element={<ReadingTest />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/logout'} element={<Logout />} />

      </Routes>
    </Router>
  );
}

export default App;
