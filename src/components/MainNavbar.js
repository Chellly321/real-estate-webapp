import "./../styles/components/Navbar.css";
import Logo from "../assets/logo/5.png";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faStar } from "@fortawesome/free-solid-svg-icons";
import OutsideClick from "../helper/OutsideClick";

function MainNavbar() {
  const [showLogo, setShowLogo] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [transitionNavbar, setTransitionNavbar] = useState(false);

  const navRef = useRef(null);
  const isClickedOutside = OutsideClick(navRef);

  useEffect(() => {
    if (isClickedOutside) {
      setShowMenu(false);
    }
  }, [isClickedOutside]);

  const changeBackground = () => {
    if (window.scrollY > 150) {
      setTransitionNavbar(true);
    } else {
      setTransitionNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav className="main_navbar">
        <div className="icons-container">
          <FontAwesomeIcon
            className="fa-bars"
            icon={faBars}
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        <div className="icons-container">
          {showLogo && (
            <Link to="/">
              <img src={Logo} className="logo" alt="Anra Caribbean Logo" />
            </Link>
          )}
        </div>

        <div
          className={
            showMenu ? "navbar-container mobile-menu" : "navbar-container"
          }
        >
          <NavLink exact to="/" className="nav-item">
            Home
          </NavLink>
          <NavLink exact to="/properties" className="nav-item">
            Properties
          </NavLink>
          <NavLink exact to="/sell-rent" className="nav-item">
            Sell/Rent
          </NavLink>
          <NavLink exact to="/projects" className="nav-item">
            Projects
          </NavLink>
          <NavLink exact to="/about" className="nav-item">
            About
          </NavLink>
          <NavLink exact to="/contact" className="nav-item">
            Contact
          </NavLink>
        </div>

        {/* <Link to="/favorites">
          <FontAwesomeIcon className="faStar" icon={faStar} />
        </Link> */}
      </nav>
    </>
  );
}
export default MainNavbar;
