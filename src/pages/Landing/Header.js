import "./Header.scss";
import buildings from "../../assets/header-buildings.png";
import train from "../../assets/header-train.png";
import Destination from "../Destination/Destination";
import Button from "../../components/Button/Button";
const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="left row">
          <div className="header-title">
            <h1 className="header-title-text">Your train travel</h1>
            <h1 className="header-title-text">start here</h1>
          </div>
          <div className="header-desc">
            <h2 className="header-desc-text">BOOKING IN 3 MINUTES, No Train</h2>
            <h2 className="header-desc-text">
              Ticket Booking Fees, Cheapest Rates
            </h2>
          </div>
          <div className="action-box">
            <Button title="Get in Touch" />
          </div>
        </div>
        <div className="right row">
          <div className="decorators">
            <img src={buildings} alt="buildings" />
            <img src={train} alt="train" />
          </div>
        </div>
      </div>
      <Destination />
    </header>
  );
};

export default Header;
