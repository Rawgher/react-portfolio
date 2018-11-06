import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 24
  },
  pos: {
    marginBottom: 12
  }
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {props.name}
        </Typography>
        <Typography className={classes.pos} color="textPrimary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Deployed</Button>
        <Button size="small">Github Repo</Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
