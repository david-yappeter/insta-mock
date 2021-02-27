import React, { useState } from "react";

import { makeStyles } from "@material-ui/styles";

import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  popUpList: {
    minWidth: "350px",
    borderRadius: "50%",
  },
  centerText: {
    textAlign: "center",
  },
}));

const MoreDialog = (props) => {
  const classes = useStyles();
  const { open, onClose } = props;

  return (
    <Dialog onClose={onClose} open={open}>
      <List className={classes.popUpList}>
        <ListItem button>
          <ListItemText className={classes.centerText} primary="tester" />
        </ListItem>
      </List>
    </Dialog>
  );
};

export default MoreDialog;
