import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Fasteat from './Components/Fasteat';
import Dashboard from './Components/Dashboard';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (enteredUsername) => {
    setUsername(enteredUsername);
    setLoggedIn(true);
  };


  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Fasteat />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard username={username}/>} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

