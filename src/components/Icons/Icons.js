import React from "react";
import Button from "@material-ui/core/Button";
import "./Icons.css";

class Icons extends React.Component {
  render() {
    return (
      <div className="mx-auto">
        <Button>
          <img
            src="./images/express-logo.png"
            alt="Express"
            className="iconImg expressLogo"
          />
        </Button>
        <Button>
          <img src="./images/mysql-logo.png" alt="mySQL" className="iconImg" />
        </Button>
        <Button>
          <img
            src="./images/mongo-logo.png"
            alt="mongoDB"
            className="iconImg"
          />
        </Button>
        <Button>
          <img
            src="./images/moustache.svg"
            alt="Handlebars"
            className="iconImg"
          />
        </Button>
        <Button>
          <img
            src="./images/react-logo.svg"
            alt="React"
            className="iconImg reactLogo"
          />
        </Button>
        {/* <img
          src="./images/node-logo.png"
          alt="Node"
          className="iconImg twoLogos"
        /> */}
        <Button>
          <img
            src="./images/mern.png"
            alt="MERN"
            className="iconImg twoLogos"
          />
        </Button>
      </div>
    );
  }
}

export default Icons;
