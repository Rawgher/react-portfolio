import React from "react";
import Nav from "../../components/Nav";
import high1 from "../../json/highlight.json";
import high2 from "../../json/highlight2.json";
import images from "../../json/image.json";
import node from "../../json/node.json";
import ImageCard from "../../components/ImageCard";
import NodeImageCard from "../../components/NodeImageCard";
import TextCard from "../../components/TextCard";
import JustImage from "../../components/JustImage";
import { Col, Row, Container } from "../../components/Grid";
import Typography from "@material-ui/core/Typography";
import "./Portfolio.css";
class Portfolio extends React.Component {
  state = {
    high1,
    high2,
    images,
    node
  };

  render() {
    return (
      <div>
        <Nav />
        <Container fluid>
          <Row>
            <Typography variant="h4" gutterBottom>
              Hey there, I'm Roger. I'm a Full Stack Web Developer looking for
              work. Below are images, links and descriptions for some of the
              projects I have been working on. Feel free to reach out to me. My
              info is on the <a href="/Contact">Contact</a> Page.
            </Typography>
          </Row>
          <Row>
            <Typography variant="h5" gutterBottom>
              Featured Projects
            </Typography>
          </Row>
          <Row>
            <Col size="md-5">
              {this.state.high1.map(high1 => (
                <JustImage image={high1.image} alt={high1.alt} />
              ))}
            </Col>
            <Col size="md-7">
              {this.state.high1.map(high1 => (
                <TextCard
                  name={high1.name}
                  description={high1.description}
                  githubURL={high1.githubURL}
                  deployedURL={high1.deployedURL}
                />
              ))}
            </Col>
          </Row>
          <Row>
            <Col size="md-7">
              {this.state.high2.map(high2 => (
                <TextCard
                  name={high2.name}
                  description={high2.description}
                  githubURL={high2.githubURL}
                  deployedURL={high2.deployedURL}
                />
              ))}
            </Col>
            <Col size="md-5">
              {this.state.high2.map(high2 => (
                <JustImage image={high2.image} alt={high2.alt} />
              ))}
            </Col>
          </Row>
          <Row>
            <Typography variant="h5" gutterBottom>
              Projects
            </Typography>
          </Row>
          <div className="marginAround">
            <Row>
              {this.state.images.map(images => (
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
              <NodeImageCard
                id={node.id}
                key={node.id}
                name={node.name}
                image={node.image}
                description={node.description}
                githubURL={node.githubURL}
                alt={node.alt}
              />
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
        </Container>
      </div>
    );
  }
}

export default Portfolio;
