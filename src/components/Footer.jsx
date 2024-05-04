import React from 'react';
import { BsFacebook, BsInstagram, BsPinterest } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Baju.id</h5>
            <p>Find your various clothing needs here, please look for clothes you like here</p>
            <div className="icons">
              <BsFacebook />
              <BsInstagram />
              <BsPinterest />
            </div>
          </div>
          <div className="col-md-2">
            <h6>Categories</h6>
            <ul>
              <li>Women</li>
              <li>Mens</li>
              <li>Kaos</li>
              <li>Jeans</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6>Company</h6>
            <ul>
              <li>About</li>
              <li>Brand</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6>Resource</h6>
            <ul>
              <li>Help Center</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6>Guides</h6>
            <ul>
              <li>Help Center</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
