import React from 'react';
import { FaBars, FaShoppingBag } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { IoSearch, IoHome, IoPerson } from 'react-icons/io5';
import OffcanvasSearch from './OffcanvasSearch';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Baju.id
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#product" className="nav-link">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Log In
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link button">
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="nav-mobile-bottom">
        <div className="container">
          <ul className="mobile-bottom-items">
            <NavLink to="/">
              <IoHome />
              <span>Home</span>
            </NavLink>
            <li type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch">
              <IoSearch />
              <span>Search</span>
            </li>
            <li type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
              <FaShoppingBag />
              <span>Cart</span>
            </li>
            <NavLink to="/login">
              <IoPerson />
              <span>Account</span>
            </NavLink>
          </ul>
        </div>
      </nav>

      {/* Search */}
      <OffcanvasSearch />
    </>
  );
};

export default Navbar;
