import React, { useState } from "react";

import { ChatBubble, UserAvatar } from "./components/index";

import { fade, makeStyles } from "@material-ui/styles";
import {
  AppBar,
  Container,
  InputBase,
  Toolbar,
  Link,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@material-ui/core";

import { useCookies } from "react-cookie";
import { Redirect } from "react-router-dom";

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
  const [cookies, setCookies, removeCookies] = useCookies();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleOpen = (e) => {
    setAnchorEl(e.target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    removeCookies("access_token");
    removeCookies("email");
    removeCookies("password");
  };

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
            <IconButton onClick={handleOpen}>
              <UserAvatar classes={classes} />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}>
              <Link href="/" style={{ color: "black" }}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
              </Link>
              <Link href="/" style={{ color: "black" }}>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Link>
              <Link onClick={handleLogout} href="/" style={{ color: "black" }}>
                <MenuItem>Logout</MenuItem>
              </Link>
            </Menu>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
