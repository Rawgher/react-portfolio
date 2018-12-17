import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./ImageCard.css";

function MediaCard(props) {
  return (
    <Card className="setHeightImage">
      <div className="center-align">
        <img className="portimg" src={props.image} alt={props.alt} />
      </div>
      <CardContent className="positioning">
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className="imageCardTitle"
        >
          {props.name}
        </Typography>
        <Typography component="p" className="imageCardDesc">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions className="buttonHolder">
        <Button
          size="small"
          color="primary"
          href={props.githubURL}
          target="_blank"
          rel="noreferrer noopener"
        >
          Github Repo
        </Button>
        <Button
          size="small"
          color="primary"
          href={props.deployedURL}
          target="_blank"
          rel="noreferrer noopener"
        >
          Deployed URL
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default MediaCard;
