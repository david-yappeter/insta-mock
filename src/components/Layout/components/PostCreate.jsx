import React, { useState, Fragment } from "react";

import {
  Button,
  Fab,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/styles";

import { useCookies } from "react-cookie";
import { useMutation, useLazyQuery } from "@apollo/client";

import { POST_CREATE } from "./../../Graphql/mutation";

const PostCreate = () => {
  const [open, setOpen] = useState(false);
  const [cookies, setCookies] = useCookies();
  const [createPost, { loading, called }] = useMutation(POST_CREATE, {
    update(cache, result) {
      console.log(result);
    },
    onError(err) {
      console.log(err);
    },
  });
  const [post, setPost] = useState({
    caption: "",
    files: undefined,
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setPost((prev) => {
      return name == "files"
        ? { ...prev, [name]: files }
        : {
            ...prev,
            [name]: value,
          };
    });
  };

  const handlePost = (e) => {
    console.log(post.files);
    e.preventDefault();
    handleClose();

    createPost({
      variables: { caption: post.caption, files: [post.files[0]] },
    });

    setPost({
      caption: "",
      files: undefined,
    });
  };

  return (
    <Fragment key="post_create_fab">
      <Fab size="small" color="primary" onClick={handleOpen}>
        <AddIcon />
      </Fab>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Upload Your File(s) and give a caption
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="caption"
            label="Caption"
            type="text"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="files"
            label="Files"
            type="file"
            fullWidth
            onChange={handleChange}
            multiple
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handlePost} color="primary">
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default PostCreate;
