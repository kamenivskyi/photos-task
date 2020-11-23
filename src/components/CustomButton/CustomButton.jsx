import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./CustomButton.scss";

const CustomButton = ({ children, type, className, variant, ...restProps }) => {
  return (
    <button
      type={type}
      className={clsx(
        "custom-button",
        {
          "button-primary": variant === "primary",
          "button-dark": variant === "dark",
        },
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  type: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
};

CustomButton.defaultProps = {
  type: "button",
  children: "button",
  variant: "dark",
};

export default CustomButton;
