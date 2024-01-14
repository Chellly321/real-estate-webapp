import React from "react";
import { Link } from "react-router-dom";

function PropertyCard({ data }) {
  return (
    <>
      {data.length === 0 && <h1>No properties</h1>}
      {data.length > 0 &&
        data.map((data) => {
          return (
            <div className="card-container">
              <div className="card">
                <div className="card-top">
                  <div className="tags">
                    <span className="tag-type">huur</span>
                    <span className="tag-location">Simpson Bay</span>
                  </div>
                  <img src={data.image} />
                </div>
                <div className="card-content">
                  <div className="card-adress">{data.address}</div>
                  <div className="card-price">{data.price}</div>
                </div>
                <div className="card-footer">
                  <ul className="footer-items">
                    <li className="list-item">
                      <span>X</span>
                      <span>{data.surface}</span>
                    </li>
                    <li className="list-item">
                      <span>X</span>
                      <span>{data.bedrooms}</span>
                    </li>
                    <li className="list-item">
                      <span>X</span>
                      <span>{data.furnished}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default PropertyCard;
