import React, { useState } from "react";
import "./Navbar.model.css";
import logo from "../../assets/cup-logo.svg";
import cart from "../../assets/shopping-cart.svg";
import hamburger from "../../assets/hamburger-menu.svg";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function openMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="navbar__container">
        <Link className="navbar__tab" to="/">
          <img src={logo} className="logo" alt="cup logo" />
        </Link>
        <ul className="navbar__tabs">
          <Link className="navbar__tab" to="/">
            <li>Home</li>
          </Link>
          <Link className="navbar__tab" to="/about-us">
            <li>About us</li>
          </Link>
          <Link className="navbar__tab" to="/cups">
            <li>Cups</li>
          </Link>
        </ul>
        <Link to="/cart">
          <img src={cart} className="logo cart" alt="cart logo" />
        </Link>

        <img
          src={hamburger}
          className="logo hamburger"
          alt="hamburger menu"
          onClick={openMenu}
        />
      </div>
      {isOpen && (
        <div className="hamburger-menu__container">
          <ul className="navbar__tabs__mobile">
            <Link className="navbar__tab" to="/" onClick={openMenu}>
              <li>Home</li>
            </Link>
            <Link className="navbar__tab" to="/about-us" onClick={openMenu}>
              <li>About us</li>
            </Link>
            <Link className="navbar__tab" to="/cups" onClick={openMenu}>
              <li>Cups</li>
            </Link>
          </ul>
          <Link to="/cart">
            <img src={cart} className="logo cart" alt="cart logo" />
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
