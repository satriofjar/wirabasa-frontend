import './App.css';
import Home from './pages/Home';
import Layanan from './pages/Layanan';
import DetailLayanan from './pages/DetailLayanan';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/layanan'} element={<Layanan/>} />
        <Route path={'/detail-layanan'} element={<DetailLayanan/>} />
      </Routes>
    </Router>
  );
}

export default App;
