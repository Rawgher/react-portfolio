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
          <Row>Featured</Row>
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
          <Row>Projects</Row>
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
          <Row>Node Projects</Row>
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
          <Row>Other work can be foudn on my Github account.</Row>
        </Container>
      </div>
    );
  }
}

export default Portfolio;
