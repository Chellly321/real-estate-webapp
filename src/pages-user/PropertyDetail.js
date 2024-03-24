import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  faExpand,
  faBed,
  faCouch,
  faShower,
} from "@fortawesome/free-solid-svg-icons";

//styles
import "../styles/properties/PropertyView.css";

import { ArrowDown, ArrowUp, MapPin, SquareCheckBig } from "lucide-react";

//components and data
import MainNavbar from "../components/MainNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactInfo from "../components/ContactInfo";
import SliderImage from "../components/SliderImage.tsx";
import PropertyImage from "../PropertyImage";
import FeaturedProperties from "./FeaturedProperties.js";

const PropertyDetail = ({ housesData }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [collapsedDetails, setCollapsedDetails] = useState(false);
  const { id } = useParams();
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });
  console.log(house);
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    // zorgt ervoor dat dit gebeurd direct bij het renderen van dit components
    scrollToTop();
  }, []);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const toggleCollapseDetails = () => {
    setCollapsedDetails(!collapsedDetails);
  };
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
          <div className="header-cont">
            <h2 className="header-detail">
              {house.heading}
              <span>
                <p>
                  <MapPin /> {house.address}
                </p>
              </span>
            </h2>
            {house.listingType === "Rent" ? (
              <h2 style={{ display: "flex", alignItems: "center" }}>
                {house.price}
                <h5>/ month</h5>
              </h2>
            ) : (
              <h2>{house.price}</h2>
            )}
          </div>

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
          <ContactInfo />
        </div>
        <div className="border"></div>
      </div>
      <div className="property_info">
        <div className="label">
          <h1>Desciption</h1>
          {collapsed ? (
            <button className="arrow_down">
              <ArrowUp onClick={toggleCollapse} />
            </button>
          ) : (
            <button className="arrow_down">
              <ArrowDown onClick={toggleCollapse} />
            </button>
          )}
        </div>
        <div className={`collapsible-content ${collapsed ? "collapsed" : ""}`}>
          <p>{house.description}</p>
        </div>
      </div>

      <div className="property_features">
        <div className="label">
          <h1>Details</h1>
          {collapsedDetails ? (
            <button className="arrow_down">
              <ArrowUp onClick={toggleCollapseDetails} />
            </button>
          ) : (
            <button className="arrow_down">
              <ArrowDown onClick={toggleCollapseDetails} />
            </button>
          )}
        </div>
        <div
          className={`collapsible-content-details ${
            collapsedDetails ? "collapsed-details" : ""
          }`}
        >
          <div className="detail-items">
            <ul className="detail-grid">
              {house.details.map((detail, index) => (
                <li className="detail-item" key={index}>
                  <span>
                    <SquareCheckBig />
                  </span>
                  {detail.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <FeaturedProperties />
    </section>
  );
};
export default PropertyDetail;
