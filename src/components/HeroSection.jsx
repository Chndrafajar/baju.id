import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 colTitle">
            <h1>
              Whatever <span>Your Clothing</span> Needs, Just Look For Them at <span>Baju.id</span>
            </h1>
            <p>Find your various clothing needs here, please look for clothes you like here</p>
            <div className="btnBeli">
              <button className="btnPrimary">Buy Now</button>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="/images/hero.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
