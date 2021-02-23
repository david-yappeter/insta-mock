import React from "react";

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
  // searchBar: {
  //   position: "relative",
  //   // borderRadius: theme.shape.borderRadius,
  //   // backgroundColor: fade(theme.palette.common.white, 0.15),
  //   // "&:hover": {
  //   //   backgroundColor: fade(theme.palette.common.white, 0.25),
  //   // },
  //   marginRight: theme.spacing(2),
  //   marginLeft: 0,
  //   width: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     marginLeft: theme.spacing(3),
  //     width: "auto",
  //   },
  // },
  // searchIcon: {
  //   padding: theme.spacing(0, 2),
  //   height: "100%",
  //   position: "absolute",
  //   pointerEvents: "none",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.navigationBar} position="fixed">
      <Container>
        <Toolbar variant="dense">
          <img src={instagram} style={{ height: "60px" }}></img>
          <Typography />
          <InputBase />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
