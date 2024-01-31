import React, { useState } from "react";
import Header from "../components/Header";
import HomeText from "../home/HomeText";
import PropertyCard from "../components/PropertyCard";

function Home({ data }) {
  return (
    <div>
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
