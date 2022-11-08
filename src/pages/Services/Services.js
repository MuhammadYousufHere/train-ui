import React from "react";
import "./Services.scss";
import countries from "./data";
import world from "../../assets/world.png";
const Services = () => {
  return (
    <main className="services-container">
      <div className="services-body">
        <div className="tag-heading">
          <h1>We operate train ticketing services in </h1>
        </div>
        <div className="branches-list">
          {countries.map((country, index) => {
            return (
              <div className="branch-item" key={index}>
                <p>{country}</p>
              </div>
            );
          })}
        </div>
        <div className="more-info">
          <div className="left">
            <div className="col">
              <div className="heading-block">
                <div className="block"></div>
                <h4>Active</h4>
              </div>
              <p>
                France, Itlay, Netherlands, Luxembourg, Austria, Germany,
                Belgium, Switzerland, Denmark, Sweden, Norway, Hungary,
              </p>
            </div>
            <div className="col">
              <div className="heading-block">
                <div className="block"></div>
                <h4>Upcomming</h4>
              </div>
              <p>
                France, Itlay, Netherlands, Luxembourg, Austria, Germany,
                Belgium, Switzerland, Denmark, Sweden, Norway, Hungary,
              </p>
            </div>
          </div>
          <div className="right">
            <figure>
              <img src={world} alt="map" />
            </figure>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
