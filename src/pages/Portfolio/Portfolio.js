import React from "react";
import Nav from "../../components/Nav";
import high1 from "../../json/highlight.json";
import high2 from "../../json/highlight2.json";
import images from "../../json/image.json";
import node from "../../json/node.json";
import express from "../../json/express.json";
import handlebars from "../../json/handlebars.json";
import html from "../../json/html.json";
import mongo from "../../json/mongo.json";
import mysql from "../../json/mysql.json";
import react from "../../json/react.json";
import ImageCard from "../../components/ImageCard";
import NodeImageCard from "../../components/NodeImageCard";
import TextCard from "../../components/TextCard";
import JustImage from "../../components/JustImage";
import { Col, Row, Container } from "../../components/Grid";
import Typography from "@material-ui/core/Typography";
import ScrollUp from "../../components/ScrollUp";
import { Link } from "react-router-dom";
import Icons from "../../components/Icons";
import "./Portfolio.css";

class Portfolio extends React.Component {
  state = {
    high1,
    high2,
    images: images,
    node
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
          <Typography variant="h4" gutterBottom>
            Hey there, I'm Roger, a Full Stack Web Developer. I'm extremely
            passionate about back end coding. Below are images, links and
            descriptions for some of the projects I have been working on. Feel
            free to reach out to me with the info from my{" "}
            <Link to="/Contact">contact</Link> page.
          </Typography>
        </Row>
        <Row>
          <Typography variant="h5" gutterBottom>
            Featured Projects
          </Typography>
        </Row>
        <Row>
          <Col size="lg-5 md-5 sm-12">
            {this.state.high1.map(high1 => (
              <JustImage image={high1.image} alt={high1.alt} />
            ))}
          </Col>
          <Col size="lg-7 md-7 sm-12">
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
          <Col size="lg-7 md-7 sm-12">
            {this.state.high2.map(high2 => (
              <TextCard
                name={high2.name}
                description={high2.description}
                githubURL={high2.githubURL}
                deployedURL={high2.deployedURL}
              />
            ))}
          </Col>
          <Col size="lg-5 md-5 sm-12">
            {this.state.high2.map(high2 => (
              <JustImage image={high2.image} alt={high2.alt} />
            ))}
          </Col>
        </Row>
        <Row>
          <Typography variant="h5">Other Projects</Typography>
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
              <Col size="lg-6 md-6 sm-12">
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
          <Typography variant="h5" gutterBottom>
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
          <Typography variant="h5" gutterBottom>
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
