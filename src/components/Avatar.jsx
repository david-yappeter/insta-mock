import React from "react";

const Avatar = ({ src, size, className, ...rest }) => {
  return (
    <div
      className={"_avatar " + (className || "")}
      style={{
        width: size,
        height: size,
        backgroundImage: `url(${src})`,
      }}
      {...rest}
    />
  );
};

Avatar.defaultProps = {
  src: "",
  size: "24px",
};

export default Avatar;
