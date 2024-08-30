import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/NavBar.css';

const Navbar = () => {
  return (
    <nav>
    <div class='logo'><img src={require('./logo.png')} alt="logo" height="50px" width="178px"></img></div>
      <ul>
        <li>
          <Link className='text-link' to="/">Home</Link>
        </li>
        <li>
          <Link className='text-link' to="/login">Login</Link>
        </li>
        <li>
          <Link className='text-link' to="/register">Register</Link>
        </li>
        <li>
          <Link className='text-link' to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link className='text-link' to="/aboutus">About Us</Link>
        </li>
        <li>
          <Link className='text-link' to="/contactus">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};



export default Navbar;
