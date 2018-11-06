import React from "react";
import Nav from "../../components/Nav";
import { Row, Container } from "../../components/Grid";
import Typography from "@material-ui/core/Typography";
import "./Contact.css";

const Contact = () => (
  <div>
    <Nav />
    <Container fluid>
      <Typography variant="h5" gutterBottom>
        Reach out to me if you have some time!
      </Typography>
      <Row>
        <img
          src="./images/github-logo.svg"
          alt="Github Logo"
          className="logoSize marRight"
        />
        {/* thank you Dave Gandy from flaticon.com for the logo */}
        <a
          href="https://github.com/Rawgher"
          target="_blank"
          rel="noreferrer noopener"
        >
          Github
        </a>
      </Row>
      <Row>
        <img
          src="./images/linkedin-logo.svg"
          alt="LinkedIn Logo"
          className="logoSize marRight"
        />
        {/* thank you SimpleIcon from flaticon.com for the logo */}
        <a
          href="https://www.linkedin.com/in/roger-pender-2b564bb4"
          target="_blank"
          rel="noreferrer noopener"
        >
          LinkedIn
        </a>
      </Row>
      <Row>
        <i className="material-icons marRight">mail</i>
        rdpender3@gmail.com
      </Row>
    </Container>
  </div>
);

export default Contact;
