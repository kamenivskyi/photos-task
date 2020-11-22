import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./CustomeButton.css";

const CustomeButton = ({
  children,
  type,
  className,
  variant,
  ...restProps
}) => {
  return (
    <button
      type={type}
      className={clsx(
        "custome-button",
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

CustomeButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  type: PropTypes.string,
};

CustomeButton.defaultProps = {
  type: "button",
  children: "button",
  variant: "dark",
};

export default CustomeButton;
