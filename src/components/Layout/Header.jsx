import React from "react";

import UserAvatar from "./components/UserAvatar";

import { fade, makeStyles } from "@material-ui/styles";
import {
  AppBar,
  Container,
  InputBase,
  Toolbar,
  Typography,
} from "@material-ui/core";

import instagram from "./instagram.png";

const useStyles = makeStyles((theme) => ({
  navigationBar: {
    // paddingLeft: "20%",
    // paddingRight: "20%",
    backgroundColor: "#FFF",
    color: "black",
  },
  avatarEnd: {
    transform: "scale(0.9)",
    marginLeft: "auto",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.navigationBar} position="fixed">
      <Container>
        <Toolbar variant="dense">
          <img src={instagram} style={{ height: "60px" }}></img>
          <UserAvatar classes={classes} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
