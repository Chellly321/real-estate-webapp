import React, { useState } from "react";
import Header from "../components/Header";
import HomeText from "../home/HomeText";
import PropertyCard from "../components/PropertyCard";
import Navbar from "../components/Navbar.js";
import "../styles/home/home.css";

function Home({ data }) {
  return (
    <div className="home-container">
      <Navbar />
      <Header />
      <HomeText />
      <div className="card-row">
        <PropertyCard data={data} />
      </div>
      <button>See more</button>
    </div>
  );
}

export default Home;
