/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonsSolidLarge = ({ className, divClassName, text = "Start Free" }) => {
  return (
    <div className={`buttons-solid-large ${className}`}>
      <div className={`start-free ${divClassName}`}>{text}</div>
    </div>
  );
};

ButtonsSolidLarge.propTypes = {
  text: PropTypes.string,
};
