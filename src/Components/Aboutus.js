import React from 'react';
import '../Css/Aboutus.css';

const About = () => {
    return (
        <div className="about">
          <img src={require('./logo2.png')} alt="logo" height="350px" width="350px"></img>
          <div className="about-text">
            <h1><strong>ABOUT FAST EATS</strong></h1>
            <p>At FAST EATS, we believe that every meal is an opportunity to create memorable experiences. 
              Our restaurant is a culinary haven where passion meets flavor, and every dish tells a story.
              Founded in 2016, FAST EATS was born out of a shared love for exceptional food and warm hospitality. 
              Our journey began with a simple goal - to create a space where guests could savor exquisite flavors in a welcoming and vibrant atmosphere. 
              Over the years, we've grown into a beloved culinary destination, known for our dedication to quality and the artistry of our chefs.</p>

            <p>Step into FAST EATS, and you'll discover more than just a place to eat; you'll find a haven where culinary expertise meets a passion for excellence. 
              Our menu is a carefully curated collection of Premium Fast Food dishes, crafted with the finest ingredients and a creative flair that sets us apart.
              We take pride in supporting local farmers and producers, ensuring that every ingredient that graces your plate is fresh, sustainable, and bursting with flavor. 
              Our chefs draw inspiration from global culinary traditions, creating a menu that celebrates diversity and the joy of discovering new tastes.
              At FAST EATS, we believe that every guest is a cherished member of our extended family. Our attentive and friendly staff is dedicated to ensuring that your dining experience exceeds expectations. 
              Whether you're here for a casual meal with friends or a special celebration, our commitment to hospitality remains unwavering.
            </p>
          </div>
        </div>
    );
  };

function Aboutus() {
    return (
        <div> 
        <About />   
      </div>
    )
}
  
export default Aboutus;