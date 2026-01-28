import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <span>AVB</span>
        <small>Manpower Solutions</small>
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
