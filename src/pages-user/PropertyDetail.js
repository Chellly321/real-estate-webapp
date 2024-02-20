import React from "react";
import { Link, useParams } from "react-router-dom";

//styles
import "../styles/properties/PropertyView.css";

//components and data
import MainNavbar from "../components/MainNavbar";

const PropertyDetail = ({ housesData }) => {
  const { id } = useParams();
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });
  console.log(house);

  return (
    <section className="property-id">
      <MainNavbar />

      <div className="id_container">
        <div>
          <img src={house.image} alt="house photo" className="id-image" />
          <h2>{house.heading}</h2>
        </div>
      </div>
    </section>
  );
};
export default PropertyDetail;
