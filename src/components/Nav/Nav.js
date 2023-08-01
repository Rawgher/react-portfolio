import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from './nav-image/letter-r.svg';

class NavTabs extends React.Component {
  render() {
    return (
      <div className="navbar">
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              <div>
                <img src={logo} alt="R-Logo" className="maxSize" />
                {/* thank you Freepik from Flaticon.com for the logo */}
              </div>
            </Link>
            <ul id="nav-mobile" className="right">
              {/* <li>
                <Link to="/">Portfolio</Link>
              </li> */}
              <li>
                <Link to="/about">About</Link>
              </li>
              {/* <li>
                <Link to="/contact">Contact</Link>
              </li> */}
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavTabs;
