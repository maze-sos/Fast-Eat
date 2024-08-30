import React from 'react';
import '../Css/Footer.css';


const Head = () => {
    return (
      <div className="footer-head">
        <img src={require('./logo.png')} alt="logo" height="50px" width="178px"></img>
        <p>FOLLOW US</p>
      </div>
    );
  };


const Main = () => {
  return (
    <footer id='footer'>
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="footer-contact">
            <h2>Fast Eats Headquaters, Abuja, FCT, Nigeria.</h2>
            <p>
            <strong>Fast Eats Headquaters, Abuja, FCT, Nigeria.</strong>
              <br></br>
              <strong>Phone:</strong> 08023456789, 08112345678<br></br>
              <strong>Email:</strong> enquiry@Fasteats.com<br></br>
            </p>
          </div>

          <div class="footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <p>Join our community to get the latest offers and Packages from Fast Eats.</p>
            <a href="#" class="ft-dropdown-item">Contact Us</a>
          </div>

        </div>
      </div>
    </div>

    <div class="copy-container">

      <div class="copy">
        <div class="copyright">
          &copy; <strong><span>Copyright 2024 Fast Eats Headquaters, Abuja, FCT, Nigeria. - All Rights Reserved.</span></strong>
        </div>
      </div>
    </div>
        </footer>
  );
};

function Footer() {
    return (
        <div>
        <Head />
        <Main />
      </div>
    )
}
  
export default Footer;