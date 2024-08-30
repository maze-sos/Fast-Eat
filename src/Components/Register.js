import React from 'react';
import '../Css/Register.css';


  const Register = () => {
    return (
     <div class="body">
      <div class="form-container">
      <h2>Registration Form</h2>
      <form>
        <div class="form-group">
          <label for="firstname">First Name:</label>
          <input type="text" id="firstname" name="firstname" placeholder="Your First Name" required></input>
        </div>
        <div class="form-group">
          <label for="lastname">Last Name:</label>
          <input type="text" id="lastname" name="lastname" placeholder="Your Last Name" required></input>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" placeholder="Your E-Mail" required></input>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="text" id="password" name="password" placeholder="Your Password" required></input>
        </div>
        <div class="form-group">
          <label for="password">Confirm Your Password:</label>
          <input type="text" id="password" name="password" placeholder="Confirm Your Password" required></input>
        </div>
        <div class="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>
     
    );
  };



export default Register;

