import React, { useState } from "react";
import Header from "../components/Header";
import HomeText from "../home/HomeText";
import PropertyCard from "../components/PropertyCard";
import PropertyDetail from "../data/PropertyDetail";

function Home() {
  const [data, setData] = useState(PropertyDetail);
  return (
    <div>
      <Header />
      <HomeText />
      <PropertyCard data={data} />
    </div>
  );
}

export default Home;
