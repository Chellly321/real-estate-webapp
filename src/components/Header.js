import React from "react";
import Navbar from "./Navbar";
import HeroSlider from "./HeroSlider";
import "../styles/components/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section>
      <div>
        <Navbar />
        <HeroSlider />
        <div className="header-context">
          <h1>Welcome to ANRA Caribbean</h1>
          <div className="link">
            <Link to="/properties" className="btn">
              All Properties
            </Link>
            <Link to="/properties" className="btn">
              Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
