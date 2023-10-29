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
import Register from './pages/Register';
import VerifyEmail from './pages/VerifyEmail';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ProtectRoute from './utils/ProtectRoute';
import { useUser } from './utils/UserContext';

function App() {
  const {user, setUser} = useUser();


  return (
   <div className='App'>
     <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={'/layanan'} element={<Layanan />} />
        <Route path={'/detail-layanan'} element={<DetailLayanan/>} />
        <Route element={<ProtectRoute />}>
          <Route path={'/user'} element={<User/>} />
          <Route path={'/edit-profile'} element={<EditProfile />} />
          <Route path={'/payment'} element={<Payment/>} />
          <Route path={'/logout'} element={<Logout />} />
        </Route>
        <Route path={'/reading-test'} element={<ReadingTest />} />
        <Route path={'/login'} element={!user ? <Login /> : <Navigate to='/' />} />
        <Route path={'/register'} element={!user ? <Register /> : <Navigate to='/' />} />
        <Route path={'/verify-email/:user_id/:token'} element={<VerifyEmail />} />

      </Routes>
    </Router>
   </div>
  );
}

export default App;
