import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/PropertyCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faBed, faCouch } from "@fortawesome/free-solid-svg-icons";

function PropertyCard({ data }) {
  return (
    <>
      {data.length === 0 && <h1>No properties</h1>}
      {data.length > 0 &&
        data.slice(0, 6).map((data) => {
          return (
            <Link
              className="property-link"
              to={`/properties/${data.id}`}
              key={data.id}
            >
              <div className="card-container">
                <div className="card">
                  <div className="card-top">
                    <div className="tags">
                      <span className="tag-type">{data.listingType}</span>
                      <span className="tag-location">{data.area}</span>
                    </div>
                    <img
                      className="card_image"
                      src={data.image}
                      alt="property"
                    />
                  </div>
                  <div className="card-content">
                    <h2 className="card-adress">{data.address}</h2>
                    <h5 className="card-price">{data.price}</h5>
                  </div>
                  <div className="card-footer">
                    <ul className="footer-items">
                      <li className="list-item">
                        <span>
                          <FontAwesomeIcon icon={faExpand} />
                        </span>
                        <span>{data.surface}</span>
                      </li>
                      <li className="list-item">
                        <span>
                          <FontAwesomeIcon icon={faBed} />
                        </span>
                        <span>{data.bedrooms}</span>
                      </li>
                      <li className="list-item">
                        <span>
                          <FontAwesomeIcon icon={faCouch} />
                        </span>
                        <span>{data.furnished}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </>
  );
}

export default PropertyCard;
