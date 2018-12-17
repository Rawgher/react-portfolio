import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./TextCard.css";

function SimpleCard(props) {
  return (
    <Card className="cardBody divHeight">
      <CardContent className="textPositioning">
        <Typography className="textTitle" color="textPrimary" gutterBottom>
          {props.name}
        </Typography>
        <Typography className="textPos" color="textPrimary">
          {props.description}
        </Typography>
        <Typography className="textPos" color="textPrimary">
          <em>{props.login}</em>
        </Typography>
      </CardContent>
      <CardActions className="textButtonHolder">
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

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default SimpleCard;
