import PropTypes from "prop-types";
import React from "react";
import { ButtonsSolidLarge } from "../ButtonsSolidLarge";
import "./style.css";

export const Buttons = ({ property1, className, buttonsSolidLargeText = "Start Free" }) => {
  return (
    <div className={`buttons ${className}`}>
      <ButtonsSolidLarge
        className={`${
          property1 === "hover"
            ? "class-4"
            : property1 === "outline"
            ? "class-5"
            : property1 === "outlined-hover"
            ? "class-6"
            : "class-7"
        }`}
        divClassName={`${property1 === "outline" ? "class" : property1 === "outlined-hover" ? "class-2" : "class-3"}`}
        text={buttonsSolidLargeText}
      />
    </div>
  );
};

Buttons.propTypes = {
  property1: PropTypes.oneOf(["outlined-hover", "solid-large-blue", "outline", "hover"]),
  buttonsSolidLargeText: PropTypes.string,
};
