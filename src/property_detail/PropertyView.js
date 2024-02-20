import React, { useEffect, useState } from "react";
import "../styles/properties/PropertyView.css";

function PropertyView({ properties }) {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const selectProperty = (propertyId) => {
    const selected = properties.find((property) => property.id === propertyId);
    setSelectedProperty(selected);
  };
  return (
    <>
      {selectedProperty &&
        selectProperty.map((data, index) => {
          <div className="property-container">
            <div className="property-header">
              <div className="header-text">{properties.address}</div>
              <div className="images">{properties.image}</div>
            </div>
            <div className="detail-column">
              <div className="property-detail"></div>
              <h3>Omschrijving</h3>
              <h4>More text</h4>
              <p>Some text</p>
              <h4>About this house</h4>
              <p></p>
              <h4>Area</h4>
              <p>t</p>
              <button>
                <span>Toon volledige Omschrijving</span>
              </button>
            </div>
            <div></div>
          </div>;
        })}
    </>
  );
}

export default PropertyView;
