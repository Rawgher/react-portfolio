import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "../../components/Grid";
import Icons from "../../components/Icons";
import ImageCard from "../../components/ImageCard";
import JustImage from "../../components/JustImage";
import Nav from "../../components/Nav";
import NodeImageCard from "../../components/NodeImageCard";
import ScrollUp from "../../components/ScrollUp";
import TextCard from "../../components/TextCard";
import express from "../../json/express.json";
import handlebars from "../../json/handlebars.json";
import high1 from "../../json/highlight.json";
import high2 from "../../json/highlight2.json";
import html from "../../json/html.json";
import images from "../../json/image.json";
import mongo from "../../json/mongo.json";
import mysql from "../../json/mysql.json";
import node from "../../json/node.json";
import react from "../../json/react.json";
import reactNative from "../../json/reactNative.json";
import "./Portfolio.css";

class Portfolio extends React.Component {
  state = {
    high1,
    high2,
    images: images,
    node,
    reactNative
  };

  expressClick = () => {
    this.setState({ images: express });
  };

  mySQLClick = () => {
    this.setState({ images: mysql });
  };

  mongoClick = () => {
    this.setState({ images: mongo });
  };

  handlebarsClick = () => {
    this.setState({ images: handlebars });
  };

  reactClick = () => {
    this.setState({ images: react });
  };

  htmlClick = () => {
    this.setState({ images: html });
  };

  refreshClick = () => {
    this.setState({ images: images });
  };

  render() {
    return (
      <Container fluid>
        <Nav />
        <Row>
          <Typography variant="h4" gutterBottom className="portSmallerFont">
            Hey there, I'm Roger, a Full Stack Web Developer. I'm extremely
            passionate about building websites from prototype to deployment.
            Below are images, links and descriptions for some of the projects I
            have been working on. Feel free to reach out to me with the info
            from my <Link to="/Contact">contact</Link> page.
          </Typography>
        </Row>
        <Row>
          <Typography variant="h4" gutterBottom>
            Featured Projects
          </Typography>
        </Row>
        <Row>
          <Col size="lg-5 md-5 sm-12 marginBottom">
            {this.state.high1.map(high1 => (
              <JustImage image={high1.image} alt={high1.alt} />
            ))}
          </Col>
          <Col size="lg-7 md-7 sm-12 marginBottom">
            {this.state.high1.map(high1 => (
              <TextCard
                name={high1.name}
                description={high1.description}
                login={high1.login}
                githubURL={high1.githubURL}
                deployedURL={high1.deployedURL}
              />
            ))}
          </Col>
        </Row>
        <Row>
          <Col size="lg-7 md-7 sm-12 marginBottom">
            {this.state.high2.map(high2 => (
              <TextCard
                name={high2.name}
                description={high2.description}
                githubURL={high2.githubURL}
                deployedURL={high2.deployedURL}
              />
            ))}
          </Col>
          <Col size="lg-5 md-5 sm-12 marginBottom">
            {this.state.high2.map(high2 => (
              <JustImage image={high2.image} alt={high2.alt} />
            ))}
          </Col>
        </Row>
        <Row>
          <Typography variant="h4">
            Other Projects (React Native and Node Projects Below)
          </Typography>
        </Row>
        <div className="hideIt">
          <Row>
            <Typography variant="h5" gutterBottom>
              (Click an icon to see language specific projects)
            </Typography>
          </Row>
          <Row>
            <Icons
              expressClick={this.expressClick}
              mySQLClick={this.mySQLClick}
              mongoClick={this.mongoClick}
              handlebarsClick={this.handlebarsClick}
              reactClick={this.reactClick}
              htmlClick={this.htmlClick}
              refreshClick={this.refreshClick}
            />
          </Row>
        </div>
        <div>
          <Row>
            {this.state.images.map(images => (
              <Col size="lg-6 md-6 sm-12 marginBottom">
                <ImageCard
                  id={images.id}
                  key={images.id}
                  name={images.name}
                  image={images.image}
                  description={images.description}
                  githubURL={images.githubURL}
                  deployedURL={images.deployedURL}
                  alt={images.alt}
                />
              </Col>
            ))}
          </Row>
        </div>
        <Row>
          <Typography variant="h4" gutterBottom>
            React Native Projects
          </Typography>
        </Row>
        <Row>
          {this.state.reactNative.map(reactNative => (
            <Col size="lg-4 md-4 sm-12">
              <NodeImageCard
                id={reactNative.id}
                key={reactNative.id}
                name={reactNative.name}
                image={reactNative.image}
                description={reactNative.description}
                githubURL={reactNative.githubURL}
                alt={reactNative.alt}
              />
            </Col>
          ))}
        </Row>
        <Row>
          <Typography variant="h4" gutterBottom>
            Node Projects
          </Typography>
        </Row>
        <Row>
          {this.state.node.map(node => (
            <Col size="lg-4 md-4 sm-12">
              <NodeImageCard
                id={node.id}
                key={node.id}
                name={node.name}
                image={node.image}
                description={node.description}
                githubURL={node.githubURL}
                alt={node.alt}
              />
            </Col>
          ))}
        </Row>
        <Row>
          <Typography variant="h5" gutterBottom className="portSmallerFont">
            Other work can be found on my{" "}
            <a
              href="https://github.com/Rawgher"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github
            </a>{" "}
            account.
          </Typography>
        </Row>
        <ScrollUp />
      </Container>
    );
  }
}

export default Portfolio;
