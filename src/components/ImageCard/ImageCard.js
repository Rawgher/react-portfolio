import React from "react";
import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./ImageCard.css";

// const styles = {
//   card: {
//     width: "50%",
//     margin: "1rem"
//   }
// };

function MediaCard(props) {
  return (
    <Card className="setHeightImage">
      <div className="center-align">
        <img className="portimg" src={props.image} alt={props.alt} />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography component="p">{props.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={props.githubURL}>
          Github Repo
        </Button>
        <Button size="small" color="primary" href={props.deployedURL}>
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
