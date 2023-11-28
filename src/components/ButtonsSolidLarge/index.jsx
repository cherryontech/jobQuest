import PropTypes from "prop-types";
import "./style.css";

export const ButtonsSolidLarge = ({ extraClasses, divClasses, text = "Start Free" }) => {
  return (
    <div className="cursor-pointer">
      <div className={`buttons-solid-large ${extraClasses}`}>
        <div className={`start-free ${divClasses}`}>{text}</div>
      </div>
    </div>
  );
};

ButtonsSolidLarge.propTypes = {
  text: PropTypes.string,
  extraClasses: PropTypes.string,
  divClasses: PropTypes.string
};
