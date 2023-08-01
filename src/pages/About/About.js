import React from 'react';
import Nav from '../../components/Nav';
// import Footer from "../../components/Footer";
import Typography from '@material-ui/core/Typography';
import AboutLogos from '../../components/AboutLogos';
import { Col, Row, Container } from '../../components/Grid';
import './About.css';

const About = () => (
  <div>
    <Container fluid>
      <Nav />
      <Row>
        <Col size="xl-3 lg-4 md-5 sm-12">
          <div className="center-align">
            <Row>
              <div>
                <img src="./images/ROGER-Small.jpg" alt="Roger" className="myImg" />
              </div>
            </Row>
          </div>
        </Col>
        <Col size="xl-9 lg-8 md-7 sm-12">
          <Row>
            <Typography variant="h5" gutterBottom className="flow-text line-height">
              Welcome to my world of web development! I am an experienced full-stack developer with a passion for crafting tailored solutions from concept to implementation. My journey into the world
              of coding began unexpectedly after spending years working with various animal species. While I always thought I would continue on that path, I found my true calling in building digital
              creations from scratch.
            </Typography>
            <div className="iPadSpacing">
              <Typography variant="h5" gutterBottom className="flow-text line-height">
                My approach to web development is rooted in a combination of independent and collaborative problem-solving, all with a primary focus on driving client success. Whether I'm working solo
                or as part of a team, I take pride in delivering projects that not only meet expectations but also exceed them. Continuous improvement is a core value in my journey as a developer. I'm
                committed to staying at the forefront of the industry by honing my technical expertise and coding skills. Keeping pace with the latest industry tools and trends ensures that the
                solutions I create are cutting-edge and future-proof.
              </Typography>
            </div>
            <div className="iPadSpacing">
              <Typography variant="h5" gutterBottom className="flow-text line-height">
                My time at UC Davis, where I earned a Bachelor's Degree in Animal Biology in 2014, laid a solid foundation for my analytical mindset and attention to detail. Now, located in Northern
                California after spending most of my life in Los Angeles, I bring a unique perspective and diversity of experiences to my work. Whether you're a startup with a vision, a small business
                aiming to expand, or an organization looking to enhance its online presence, I am here to partner with you. Together, we can transform your ideas into functional, user-friendly, and
                visually stunning digital experiences.
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
      {/* <Footer /> */}
    </Container>
  </div>
);

export default About;
