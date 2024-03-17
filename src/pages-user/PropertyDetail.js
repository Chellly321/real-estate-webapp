import React from "react";
import { useParams } from "react-router-dom";
import {
  faExpand,
  faBed,
  faCouch,
  faShower,
} from "@fortawesome/free-solid-svg-icons";

//styles
import "../styles/properties/PropertyView.css";

//components and data
import MainNavbar from "../components/MainNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactInfo from "../components/ContactInfo";
import SliderImage from "../components/SliderImage.tsx";
import PropertyImage from "../PropertyImage";

const PropertyDetail = ({ housesData }) => {
  const { id } = useParams();
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });
  console.log(house);

  return (
    <section className="property-id">
      <MainNavbar />

      <div
        style={{
          maxWidth: "1700px",
          width: "100%",
          height: "700px",
          margin: "0 auto",
        }}
      >
        <SliderImage imageUrls={PropertyImage} />
      </div>
      <div className="id_container">
        <div>
          {/* <img src={house.image} alt="house photo" className="id-image" /> */}
          <h2 className="header-detail">{house.heading}</h2>'
          <div className="list-details">
            <ul className="list_detail_items">
              <li>
                <span>
                  <FontAwesomeIcon icon={faBed} />
                </span>
                <span>{house.bedrooms}</span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faShower} />
                </span>
                <span>{house.bathrooms}</span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faExpand} />
                </span>
                <span>{house.surface}</span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faCouch} />
                </span>
                <span>{house.furnished}</span>
              </li>
            </ul>
          </div>
        </div>
        <ContactInfo />
      </div>
    </section>
  );
};
export default PropertyDetail;
