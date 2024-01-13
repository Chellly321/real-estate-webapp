import "./../styles/components/Navbar.css";
import Logo from "../assets/logo/5.png";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faStar } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [showLogo, setShowLogo] = useState(true);
  const [showMobileLogo, setShowMobileLogo] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="navbar">
        {showLogo && (
          <Link to="/">
            <img src={Logo} className="logo" alt="Anra Caribbean Logo" />
          </Link>
        )}

        <div
          className={
            showMenu ? "navbar-container mobile-menu" : "navbar-container"
          }
        >
          {showMobileLogo && (
            <Link to="/">
              <img src={Logo} className="menu-logo" alt="Anra Caribbean Logo" />
            </Link>
          )}
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>
          <NavLink to="/properties" className="nav-item">
            Properties
          </NavLink>
          <NavLink to="/sell-rent" className="nav-item">
            Sell/Rent
          </NavLink>
          <NavLink to="/projects" className="nav-item">
            Projects
          </NavLink>
          <NavLink to="/about" className="nav-item">
            About
          </NavLink>
          <NavLink to="/contact" className="nav-item">
            Contact
          </NavLink>
        </div>

        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon
          className="fa-bars"
          icon={faBars}
          onClick={() => setShowMenu(!showMenu)}
        />
      </nav>
    </>
  );
}
export default Navbar;
