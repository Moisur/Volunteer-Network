import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './Components/pages/Admin/Admin';
import Blog from './Components/pages/Blog/Blog';
import Donation from './Components/pages/Donation/Donation';
import Events from './Components/pages/Events/Events';
import Home from './Components/pages/Home/Home';
import Login from './Components/pages/Login/Login';
import Register from './Components/pages/Register/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/donation" element={<Donation/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </div>
  );
}

export default App;
