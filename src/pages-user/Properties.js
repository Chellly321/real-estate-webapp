import React from "react";
import PropertyCard from "../components/PropertyCard";
import "../styles/properties/Properties.css";
import MainNavbar from "../components/MainNavbar";

function Properties({ data }) {
  return (
    <>
      <MainNavbar />
      {data.length === 0 && <h1>There are no found properties listed</h1>}
      {data.length > 0 && (
        <div className="property-grid">
          <PropertyCard data={data} />
        </div>
      )}
    </>
  );
}
export default Properties;
