import React from 'react';
import { Route,  Routes } from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Awareness from './components/Awareness';
import Navbar from './components/Navabar/Navbar';
import ProfilePage from './components/Profile/ProfilePage';
import ProductDisplay from './components/ProductDisplay/ProductDisplay';
import NurseList from './components/NurseList/NurseList';



const App = () => {
  return (
    <>
      <Navbar/>
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<ProductDisplay/>} />
          <Route path="/appointments" element={<NurseList/>} />
          <Route path="/awareness" element={<Awareness />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
      </>
    
  );
};

export default App;
