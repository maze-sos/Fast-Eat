import React from 'react';
import '../Css/Aboutus.css';

const Contact = () => {
    return (
        <div className="about">
          <img src={require('./logo2.png')} alt="logo" height="300px" width="300px"></img>
          <div className="about-text">
            <h1><strong>Contact Us</strong></h1>
            <p>Fast Eats Headquaters, Abuja, FCT, Nigeria.</p>

            <p><strong>Phone:</strong> 08023456789, 08112345678<br></br>
              <strong>Email:</strong> enquiry@Fasteats.com<br></br>
            </p>

            <div class="footer-newsletter">
            <p>Click the Button Below to get the latest offers and Packages from Fast Eats.</p>
            <a href="#" class="abt-dropdown-item">Contact Us</a>
          </div>
          </div>
        </div>
    );
  };

function Contactus() {
    return (
        <div> 
        <Contact />   
      </div>
    )
}
  
export default Contactus;