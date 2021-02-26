import React from "react";

import avatarImage from "./avatar.jpg";

import { Avatar } from "@material-ui/core";

const UserAvatar = ({ classes: { avatarEnd } }) => {
  return (
    <Avatar
      alt="User-Image"
      variant="circle"
      src={avatarImage}
      className={avatarEnd}
    />
  );
};

export default UserAvatar;
