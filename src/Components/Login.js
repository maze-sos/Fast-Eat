import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/Login.css';

const Login = ({onLogin}) => {
  const [username, Username] = useState('');
  const [password, Password] = useState('');
  const nav = useNavigate();

  const Submit = (submit) => {
    submit.preventDefault();
    onLogin(username);
    nav('/Dashboard');
  };
  


  return (
    <div className="body">
      <div className="form-container">
        <h2>Log In</h2>
        <form onSubmit={Submit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" placeholder="Enter your username" value={username} onChange={(submit) => Username(submit.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" placeholder="Your Password" value={password} onChange={(submit) => Password(submit.target.value)} required />
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
