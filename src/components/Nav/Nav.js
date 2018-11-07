import React from "react";
import "./Nav.css";
import logo from "./nav-image/letter-r.svg";

class NavTabs extends React.Component {
  render() {
    return (
      <div className="navbar">
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              <div>
                <img src={logo} alt="R-Logo" className="maxSize" />
                {/* thank you Freepik from Flaticon.com for the logo */}
              </div>
            </a>
            <ul id="nav-mobile" className="right">
              <li>
                <a href="/About">About</a>
              </li>
              <li>
                <a href="/Contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavTabs;
