import React from "react";

const Loader = ({
  color,
  className,
  style,
  strokeWidth,
  innerWidth,
  ...rest
}) => (
  <div
    className={"_loader " + (className || "")}
    style={{
      borderTopColor: color,
      borderRightColor: color,
      borderLeftColor: color,
      width: innerWidth,
      height: innerWidth,
      borderWidth: strokeWidth,
      ...style,
    }}
    {...rest}
  />
);

Loader.defaultProps = {
  color: "black",
  strokeWidth: "5px",
  innerWidth: "20px",
};

export default Loader;
