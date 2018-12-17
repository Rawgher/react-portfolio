import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./NodeImageCard.css";

function MediaCard(props) {
  return (
    <Card className="setHeight">
      <div className="center-align">
        <img className="nodeimg" src={props.image} alt={props.alt} />
      </div>
      <CardContent className="nodePositioning">
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className="nodeImageTitle"
        >
          {props.name}
        </Typography>
        <Typography component="p" className="nodeImageDesc">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions className="nodeButtonHolder">
        <Button
          size="small"
          color="primary"
          href={props.githubURL}
          target="_blank"
          rel="noreferrer noopener"
        >
          Github Repo
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default MediaCard;
