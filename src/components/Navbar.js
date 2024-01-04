import "./../styles/components/Navbar.css";
import Logo from "../assets/logo/5.png";
import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>
          <NavLink to="/properties" className="nav-item">
            Properties
          </NavLink>
          <NavLink to="/projects" className="nav-item">
            Projects
          </NavLink>
        </div>

        <Link to="/">
          <img src={Logo} className="logo" alt="Anra Caribbean Logo" />
        </Link>

        <div className="navbar-container">
          <NavLink to="/about" className="nav-item">
            About
          </NavLink>
          <NavLink to="/contact" className="nav-item">
            Contact
          </NavLink>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
