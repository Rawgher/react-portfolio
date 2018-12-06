import React from "react";
import Button from "@material-ui/core/ButtonBase";
import "./Icons.css";

class Icons extends React.Component {
  render() {
    return (
      <div className="mx-auto">
        <Button disableRipple="true">
          <img
            src="./images/express-logo.png"
            alt="Express"
            className="iconImg expressLogo"
          />
        </Button>
        <Button disableRipple="true" disableTouchRipple="true">
          <img src="./images/mysql-logo.png" alt="mySQL" className="iconImg" />
        </Button>
        <Button disableRipple="true" disableTouchRipple="true">
          <img
            src="./images/mongo-logo.png"
            alt="mongoDB"
            className="iconImg"
          />
        </Button>
        <Button disableRipple="true" disableTouchRipple="true">
          <img
            src="./images/moustache.svg"
            alt="Handlebars"
            className="iconImg"
          />
        </Button>
        <Button disableRipple="true" disableTouchRipple="true">
          <img
            src="./images/react-logo.svg"
            alt="React"
            className="iconImg reactLogo"
          />
        </Button>
        <Button disableRipple="true" disableTouchRipple="true">
          <img
            src="./images/html-5-badge.svg"
            alt="HTML"
            className="iconImg"
          />
        </Button>
        {/* <img
          src="./images/node-logo.png"
          alt="Node"
          className="iconImg twoLogos"
        /> */}
        <Button disableRipple="true" disableTouchRipple="true">
          <img
            src="./images/rotate.svg"
            alt="refresh"
            className="iconImg"
          />
        </Button>
      </div>
    );
  }
}

export default Icons;
