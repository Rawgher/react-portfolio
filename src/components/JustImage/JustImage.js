import React from "react";
// import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import "./JustImage.css";

function MediaCard(props) {
  return (
    <Card>
      <img src={props.image} alt={props.alt} className="imageCardSize" />
    </Card>
  );
}

// MediaCard.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default MediaCard;
