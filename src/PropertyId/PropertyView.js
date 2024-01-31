import React from "react";

function PropertyView({ data }) {
  return (
    <>
      <div className="property-container">
        <div className="property-header">
          <div className="header-text"></div>
          <div className="images">X</div>
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
      </div>
    </>
  );
}

export default PropertyView;
