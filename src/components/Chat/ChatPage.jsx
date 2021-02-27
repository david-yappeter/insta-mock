import React, { Fragment, useState } from "react";

import angelaYu from "./components/angela-yu.jpg";

import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import ChatPanel from "./components/ChatPanel";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import { makeStyles, withStyles } from "@material-ui/styles";
import {
  AppBar,
  Toolbar,
  Avatar,
  Badge,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      content: '""',
    },
  },
}))(Badge);

const useStyles = makeStyles(() => ({
  chatNavbar: {
    backgroundColor: "#CFBDB2",
    color: "black",
  },
  nameMargin: {
    marginLeft: "16px",
  },
  // leftPanel: {
  //   width: "30%",
  // },
  // rightPanel: {
  //   width: "70%",
  // },
}));

const ChatPage = () => {
  const classes = useStyles();
  const [online, setOnline] = useState(false);

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={4}>
          <Paper className={classes.leftPanel}>
            <List>
              <ListItem button>
                <ListItemAvatar>
                  <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    variant="dot">
                    <Avatar alt="Angela Yu" src={angelaYu}></Avatar>
                  </StyledBadge>
                </ListItemAvatar>
                <ListItemText
                  primary="Dr.Angela Yu"
                  secondary="Secondary Text In Here"
                />
                <ListItemSecondaryAction>
                  <Badge
                    badgeContent={5}
                    color="secondary"
                    style={{ marginRight: "5px" }}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
            <Typography>abc</Typography>
            <Typography>abc</Typography>
            <Typography>abc</Typography>
            <Typography>abc</Typography>
            <Typography>abc</Typography>
            <Typography>abc</Typography>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper style={{ height: "600px" }} className={classes.rightPanel}>
            <AppBar className={classes.chatNavbar} position="relative">
              <Toolbar variant="dense">
                <Avatar alt="Angela Yu" src={angelaYu}></Avatar>
                <Typography className={classes.nameMargin}>
                  Angela Yu
                </Typography>
              </Toolbar>
            </AppBar>
            <ChatPanel />
            <Typography>abc</Typography>
            <Typography>abc</Typography>
            <Typography>abc</Typography>
            <Typography>abc</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ChatPage;
