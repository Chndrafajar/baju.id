import React from 'react';

const TentangKami = () => {
  return (
    <div className="tentangKami" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h5>About Us</h5>
            <h2>
              <span>Create </span> And <span>Sell Your Products</span> Here, Come <span>Join</span> The <span>Penjual</span>
            </h2>
            <p>We designed this website to make it easier for you to sell various kinds of clothing designs that you want to sell</p>
            <div className="button">
              <button className="btnPrimary">Start Selling</button>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="/images/tentang.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangKami;
