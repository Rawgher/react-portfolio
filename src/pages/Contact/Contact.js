import React from "react";
import Nav from "../../components/Nav";
import { Row, Container, Col } from "../../components/Grid";
import Typography from "@material-ui/core/Typography";
import "./Contact.css";

const Contact = () => (
  <div>
    <Container fluid>
      <Nav />
      <Row>
        <Col size="lg-5 md-5 sm-12">
          {/* <Typography variant="h4" gutterBottom>
            Reach out to me if you have some time!
          </Typography> */}
          <Row>
            <img
              src="./images/github-logo.svg"
              alt="Github Logo"
              className="logoSize marRightMore marLeft"
            />
            {/* thank you Dave Gandy from flaticon.com for the logo */}
            <a
              href="https://github.com/Rawgher"
              target="_blank"
              rel="noreferrer noopener"
              className="fontSize"
            >
              Github
            </a>
          </Row>
          <Row>
            <img
              src="./images/linkedin-logo.svg"
              alt="LinkedIn Logo"
              className="logoSize marRightMore marLeft"
            />
            {/* thank you SimpleIcon from flaticon.com for the logo */}
            <a
              href="https://www.linkedin.com/in/roger-pender"
              target="_blank"
              rel="noreferrer noopener"
              className="fontSize"
            >
              LinkedIn
            </a>
          </Row>
          <Row>
            <i className="material-icons medium marRight">mail</i>
            <a href="mailto:rdpender3@gmail.com" className="fontSize">
              rdpender3@gmail.com
            </a>
          </Row>
        </Col>
        <Col size="lg-7 md-7 sm-12">
          <embed
            src="./images/resume.pdf"
            type="application/pdf"
            className="pdf"
          />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Contact;
