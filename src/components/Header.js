import React from "react";
import Navbar from "./Navbar";
import HeroSlider from "./HeroSlider";

function Header() {
  return (
    <section className="header">
      <div className="header-container">
        <Navbar />
        <HeroSlider />
      </div>
    </section>
  );
}

export default Header;
