import React from "react";
import Card from "./Card";
import { data } from "./data";
import about from "../../assets/about-image.png";
import "./History.scss";
const History = () => {
  return (
    <div className="history-container">
      <div className="history-body">
        <div className="row">
          <div className="col">
            <div className="tagline">
              <h1>Information About</h1>
              <h1>Save A Train</h1>
            </div>
            <div className="details">
              <p>{data.details + data.details}</p>
            </div>
            <div className="punchline">
              <p>{data.punchline}</p>
            </div>
            <div className="endline">
              <p>{data.endline}</p>
            </div>
            <div className="items-container">
              <ul>
                {data.bullets.map((line, i) => {
                  return (
                    <li key={i}>
                      <div className="circle">
                        <p>{i + 1}</p>
                      </div>
                      {line}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col">
            <figure>
              <img src={about} alt="save a train" />
            </figure>
          </div>
        </div>
        <div className="row">
          <div className="cards-list">
            {data.cardData.map((item, i) => {
              return <Card key={i} text={item.scrible} title={item.btnTitle} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
