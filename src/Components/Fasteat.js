import React from 'react';
import '../Css/Fasteat.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Food That tastes Good </h1>
        <h1>Anywhere and Anytime.</h1>
        <button type="button">Check Menu</button>
        <button type="button">Make Order</button>
      </div>
    </div>
  );
};

const CardHead = () => {
  return (
  <div className="CardHead"> 
        <h3>HOW WE WORK</h3>
        <h1>THIS IS THE FUTURE OF <br></br>PREMIUM FAST FOODS</h1>
  </div>
  );
};
  
const Circles = () => {
  return (
<div>

<hr style={{marginTop:'100px'}}/>
<div className='circle-container'>
<div className='lenses-circle'></div>
<div className='lenses-circle'></div>
<div className='lenses-circle'></div>
<div className='lenses-circle'></div>
</div>



<div style={{marginTop:'60px'}} className='lenses-container'>
<div className='lenses-item'>
<div className='circle'> 
    <i class="fa-solid fa-pencil fa-3x"></i>
  </div>
<h4>Written for You</h4>
<p>We have Recipes written with love for you to get Satisfaction. </p>
</div>

<div className='lenses-item'>
  <div className='circle'> 
    <i class="fa fa-star fa-3x"></i>
  </div>
<h4>Perfected for You</h4>
<p>Get Meals that are cooked and made to Perfection.</p>
</div>
  
<div className='lenses-item'>
<div className='circle'> 
<i class="fa fa-check-circle fa-3x"></i>
  </div>
<h4>Approved for You</h4>
<p>We have been Approved By The Federal Food Commision</p>
</div>

<div className='lenses-item'>
<div className='circle'> 
    <i class="fa-solid fa-house fa-3x"></i>
  </div>
<h4>Around You</h4>
<p>We have Kitchens and Branches Nationwide.</p>
</div>
</div>
</div>
  )    
};

const Pictures = () =>{
  return(
   <div className="pictures">
     <div className="sub-L">
       <div className="gal gal-1"></div>
       <div className="gal gal-2"></div>
       <div className="gal gal-3"></div>
       <div className="sub-R">
    <div className='double'>
          <div className="gal gal-4">
              <h4>Food is not just a trend; It's an expression of individuality</h4>
              <h1>Redefining Elegance in Fast Foods</h1>
              <p>Established with a passion for creativity and an unwavering commitment to quality, 
                Fast Eats has emerged as a distinguished name in the fast food industry. 
                Our journey began with a vision to create a chain that transcends fleeting fast food fads 
                and instead focuses on crafting meals that stand the test of time. </p>
        </div>
       </div>
       <div className='double'>
          <div className="gal gal-5"></div>
       <div className="gal gal-6"></div>
       </div>
    </div> 
    </div>
    
   </div>
  )

}

  const Services = () =>{
    return(
        <div class="flex-container">
        <div class="flex-box">
            <h3>FIND A <br></br>
                LOCATION</h3>
            <i class="fa fa-compass fa-5x" aria-hidden="true" ></i>
            <p>Learn More <i class="fa fa-arrow-right" aria-hidden="true"></i></p>           
        </div>
        <div class="flex-box">
            <h3>BROWSE OUR 
                FOOD & SNACKS MENU</h3>
            <i class="fa fa-search fa-5x" aria-hidden="true" ></i>
            <p>Explore Menu <i class="fa fa-arrow-right" aria-hidden="true"></i></p>  
        </div>
        <div class="flex-box">
            <h3>EXPLORE OUR DELIVERY OPTIONS</h3>
            <i class="fa fa-ship fa-5x" aria-hidden="true" ></i>
            <p>Explore Options <i class="fa fa-arrow-right" aria-hidden="true"></i></p>  
        </div>
        </div>
    )
  }
  const About = () => {
    return (
        <div className="about">
          <img src={require('./logo2.png')} alt="logo" height="400px" width="400px"></img>
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

function Fasteat() {
    return (
        <div>
        <Hero />
        <CardHead />
        <Circles />
        <Pictures />
        <Services />   
        <About />   
      </div>
    )
}
  
export default Fasteat;