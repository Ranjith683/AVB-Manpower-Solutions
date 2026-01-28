import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="AVB Manpower soloutions logo" />
        </Link>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/service">Service</Link>
        {/* <Link to="/expertise">Expertise</Link> */}
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;
