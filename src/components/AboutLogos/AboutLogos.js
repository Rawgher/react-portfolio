import React from "react";
import "./AboutLogos.css";

class AboutLogos extends React.Component {
  render() {
    return (
      <div className="mx-auto center">
        <img
          src="./images/html-5-badge.svg"
          alt="HTML"
          className="aboutIconImg"
        />
        <img src="./images/css.svg" alt="CSS" className="aboutIconImg" />
        <img
          src="./images/javascript.svg"
          alt="Javascript"
          className="aboutIconImg"
        />
        <img src="./images/jquery.png" alt="jQuery" className="aboutIconImg" />
        <img
          src="./images/firebase.svg"
          alt="Firebase"
          className="aboutIconImg"
        />
        <img src="./images/node-logo.png" alt="Node" className="aboutIconImg" />
        <img
          src="./images/express-logo.png"
          alt="Express"
          className="aboutIconImg aboutExpressLogo marginSpacing"
        />
        <img
          src="./images/mysql-logo.png"
          alt="mySQL"
          className="aboutIconImg marginSpacingTwo"
        />
        <img
          src="./images/mongo-logo.png"
          alt="mongoDB"
          className="aboutIconImg"
        />
        <img
          src="./images/moustache.svg"
          alt="Handlebars"
          className="aboutIconImg marginSpacingThree"
        />
        <img
          src="./images/react-logo.svg"
          alt="React"
          className="aboutIconImg aboutReactLogo"
        />
      </div>
    );
  }
}

export default AboutLogos;
