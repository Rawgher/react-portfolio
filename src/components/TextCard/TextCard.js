import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./TextCard.css";

const styles = {
  title: {
    fontSize: 42
  },
  pos: {
    // marginBottom: 30,
    fontSize: 22
  }
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <Card className="cardBody divHeight">
      <CardContent className="textPositioning">
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {props.name}
        </Typography>
        <Typography className={classes.pos} color="textPrimary">
          {props.description}
        </Typography>
        <Typography className={classes.pos} color="textPrimary">
          <em>{props.login}</em>
        </Typography>
      </CardContent>
      <CardActions className="textButtonHolder">
        <Button size="small" color="primary">
          Deployed
        </Button>
        <Button size="small" color="primary">
          Github Repo
        </Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
