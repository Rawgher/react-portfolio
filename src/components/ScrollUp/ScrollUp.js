import React from "react";
import ScrollUpButton from "react-scroll-up-button";
import "./ScrollUp.css";

class ScrollUp extends React.Component {
  render() {
    return (
      <div>
        <ScrollUpButton
          ContainerClassName="ScrollUpButton__Container"
          TransitionClassName="ScrollUpButton__Toggled"
        >
          <img src="./images/up-arrow.svg" alt="up arrow" />
        </ScrollUpButton>
      </div>
    );
  }
}

export default ScrollUp;
