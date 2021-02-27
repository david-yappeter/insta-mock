import React from "react";

import { ChatBubble, UserAvatar } from "./components/index";

import { fade, makeStyles } from "@material-ui/styles";
import {
  AppBar,
  Container,
  InputBase,
  Toolbar,
  Link,
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
    // marginLeft: "auto",
  },
  chatIconEnd: {
    // marginLeft: "auto",
  },
  chatIconSize: {
    height: "30px",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.navigationBar} position="fixed">
      <Container>
        <Toolbar variant="dense">
          <Link href="/">
            <img src={instagram} style={{ height: "60px" }}></img>
          </Link>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100px",
            }}>
            <ChatBubble classes={classes} />
            <UserAvatar classes={classes} />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
