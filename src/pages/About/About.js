import React from "react";
import Nav from "../../components/Nav";
import Typography from "@material-ui/core/Typography";
import { Col, Row, Container } from "../../components/Grid";
import "./About.css";

const About = () => (
  <div>
    <Nav />
    <Container fluid>
      <Row>
        <Col size="md-4">
          <div className="center-align">
            <img
              src="./images/RogerPender.jpg"
              alt="Roger Pender"
              className="myImg"
            />
          </div>
        </Col>
        <Col size="md-8">
          <Row>
            <Typography variant="h5" gutterBottom>
              I graduated from UC Davis in 2014 with a Bachelor's Degree in
              Animal Biology. I'm currently located in Northern California, but
              I spent the majority of my life down in Los Angeles.
            </Typography>
            <Typography variant="h5" gutterBottom>
              I'm a nerdy kid who enjoys comics, spending a lot of time on
              Netflix and browsing Reddit. I spend too much time bothering and
              taking pictures of my pets (Mabel, Shadow & Lola).
            </Typography>
          </Row>
          <Row>
            <Col size="md-6">
              <img src="./images/mabel.jpg" alt="Mabel" className="petImg" />
            </Col>
            <Col size="md-6">
              <img
                src="./images/shadow-lola.jpg"
                alt="Shadow and Lola"
                className="petImg"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Typography variant="h5" gutterBottom>
          I've worked with different species of animals during all sorts of
          jobs, and had always thought I would keep working with them, until I
          discovered coding. I really love building stuff from scratch and am
          looking forward to seeing all the different ways I can do that. Please
          contact me if there are any projects I can help you with.
        </Typography>
      </Row>
      <Row>
        <Typography variant="h5" gutterBottom>
          Technologies Known
        </Typography>
      </Row>
      <Typography variant="h6" gutterBottom>
        <Row>
          <Col size="md-2">
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript</li>
              <li>JQuery</li>
              <li>Bootstrap</li>
              <li>Firebase</li>
            </ul>
          </Col>
          <Col size="md-2">
            <ul>
              <li>Node Js</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>Handlebars JS</li>
              <li>React Js</li>
            </ul>
          </Col>
        </Row>
      </Typography>
    </Container>
  </div>
);

export default About;
