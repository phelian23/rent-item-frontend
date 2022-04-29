import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Signin from './app/components/Signin';
import NavBar from './app/components/Navbar';
import ScooterList from './app/components/ScooterList';
import Signup from './app/components/SignUp';
import ResetPassword from './app/components/ResetPassword';
import AddScooter from './app/components/AddScooter';
import DeleteScooter from './app/components/DeleteScooter';
import MyFavourites from './app/components/MyFavourites';

function App() {
  return (
    <div className="pt-5">
      <NavBar />
      <Routes>
        <Route path="/" element={<ScooterList />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/addscooter" element={<AddScooter />} />
        <Route path="/deletescooter" element={<DeleteScooter />} />
        <Route path="/myfavourites" element={<MyFavourites />} />
      </Routes>
    </div>
  );
}

export default App;
