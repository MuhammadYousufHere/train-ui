import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import flag from "../../assets/flag.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = ({ children }) => {
  const [navTop, setNavTop] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setNavTop(0);
    } else {
      setNavTop(-70);
    }
    prevScrollpos = currentScrollPos;
  };

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="navbar-container" style={{ top: navTop + "px" }}>
      <nav className="navbar-body">
        <div className="logo-box">
          <a href="/" className="logo">
            <img src={logo} alt="connecto" />
          </a>
        </div>
        <div className="mobile">
          <div className="burger">
            <FontAwesomeIcon icon={faBars} />
          </div>
          {/* <ul className=""></ul> */}
        </div>
        <ul className="screen">
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/">Manage Booking</a>
          </li>
          <li>
            <a href="/">Blogs</a>
          </li>
          <li>
            <a href="/">For bussiness</a>
          </li>
          <li>
            <a href="/">Help</a>
          </li>
          <li>
            <img src={flag} alt="us" />
          </li>
        </ul>
        <ul className="tab ">
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/">Help</a>
          </li>
          <li>
            <img src={flag} alt="us" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
