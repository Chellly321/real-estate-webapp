import React from "react";
import Navbar from "../components/Navbar";
import PropertyView from "../PropertyId/PropertyView";

const PropertyDetail = ({ data }) => {
  return (
    <div>
      <Navbar />
      <PropertyView data={data} />
    </div>
  );
};

export default PropertyDetail;
