import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footerPadMar">
        <Container>
          <nav class="navbar fixed-bottom justify-content-center">
            <Row>
              <a
                href="https://github.com/Rawgher"
                target="_blank"
                rel="noreferrer noopener"
                // className="footerFontSize"
              >
                <img
                  src="./images/github-logo.svg"
                  alt="Github Logo"
                  className="footerLogoSize"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/roger-pender"
                target="_blank"
                rel="noreferrer noopener"
                // className="footerFontSize"
              >
                <img
                  src="./images/linkedin-logo.svg"
                  alt="LinkedIn Logo"
                  className="footerLogoSize"
                />
              </a>
              <a
                href="mailto:rdpender3@gmail.com"
                className="blackLogo logoMarTop"
              >
                <i className="material-icons medium footerLogoSize">mail</i>
              </a>
            </Row>
          </nav>
        </Container>
      </div>
    );
  }
}

export default Footer;
