import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const styles = {
  card: {
    maxWidth: "100%",
    maxHeight: 600
  }
};

function MediaCard(props) {
  // const { classes } = props;
  return (
    <Card>
      <img src={props.image} alt={props.alt} style={styles.card} />
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
