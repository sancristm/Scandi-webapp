import PropTypes from "prop-types";

import React from "react";

const Button = ({ color, onClick, text, disabled }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
      disabled={disabled}
    >
      {text}
    </button>
  );
};
Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
