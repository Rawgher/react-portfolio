import React from "react";
import Nav from "../../components/Nav";
import Typography from "@material-ui/core/Typography";
import AboutLogos from "../../components/AboutLogos";
import { Col, Row, Container } from "../../components/Grid";
import "./About.css";

const About = () => (
  <div>
    <Container fluid>
      <Nav />
      <Row>
        <Col size="xl-3 lg-4 md-5 sm-12">
          <div className="center-align">
            <Row>
              <div>
                <img
                  src="./images/ROGER-Small.jpg"
                  alt="Roger"
                  className="myImg"
                />
              </div>
            </Row>
          </div>
        </Col>
        <Col size="xl-9 lg-8 md-7 sm-12">
          <Row>
            <Typography
              variant="h5"
              gutterBottom
              className="flow-text line-height"
            >
              I've worked with different species of animals during all sorts of
              jobs, and had always thought I would keep working with them, until
              I discovered coding. I really love building stuff from scratch and
              am looking forward to seeing all the different ways I can do that.
            </Typography>
            <div className="iPadSpacing">
              <Typography
                variant="h5"
                gutterBottom
                className="flow-text line-height"
              >
                I graduated from UC Davis in 2014 with a Bachelor's Degree in
                Animal Biology. I'm currently located in Northern California,
                but I spent the majority of my life down in Los Angeles.
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                className="flow-text line-height"
              >
                I'm a nerdy kid who enjoys comics, spending a lot of time on
                Netflix and browsing Reddit. I spend too much time bothering and
                taking pictures of my pets.
              </Typography>
            </div>
          </Row>
        </Col>
      </Row>
      <Row>
        <Typography variant="h5" gutterBottom>
          Technologies Known
        </Typography>
      </Row>
      <Row>
        <AboutLogos />
      </Row>
    </Container>
  </div>
);

export default About;
