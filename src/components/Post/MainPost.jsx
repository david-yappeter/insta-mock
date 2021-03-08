import React, { useState } from "react";

import MoreDialog from "./Dialog/MoreDialog";

import dummyImage from "./fff.png";

import Truncate from "react-truncate";

import { keyframes } from "styled-components";
import { makeStyles } from "@material-ui/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";

import {
  Avatar,
  IconButton,
  Collapse,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardContent,
  Link,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    margin: "10px auto 40px",
  },
  media: {
    position: "relative",
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    // transition: theme.transitions.create("transform", {
    //   duration: theme.transitions.duration.shortest,
    // }),
  },
  avatar: {
    backgroundColor: "red",
  },
}));

const MainPost = (props) => {
  const { caption, files, created_at, user } = props;

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false);
  const [moreDialogOpen, setMoreDialogOpen] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLiked = () => {
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmark(!isBookmark);
  };

  const handleMoreDialog = () => {
    setMoreDialogOpen(!moreDialogOpen);
  };

  const handleMoreDialogOnClose = () => {
    setMoreDialogOpen(false);
  };

  const preventDefault = (event) => event.preventDefault();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            DY
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={handleMoreDialog}>
            <MoreVertIcon />
          </IconButton>
        }
        title={user.name}
        subheader="September 14, 2016"
      />
      <MoreDialog open={moreDialogOpen} onClose={handleMoreDialogOnClose} />
      <CardMedia
        onDoubleClick={handleLiked}
        className={classes.media}
        image={files[0].view_link}
        title="Paella dish">
        <FavoriteIcon
          style={{ transform: "scale(0)" }}
          className={isLiked ? "whiteFavouriteEffect" : null}
        />
      </CardMedia>
      <CardActions disableSpacing>
        <IconButton onClick={handleLiked} aria-label="add to favorites">
          {isLiked ? (
            <FavoriteIcon
              className={isLiked ? "favouriteButtonEffect" : null}
            />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton style={{ marginLeft: "auto" }} onClick={handleBookmark}>
          {isBookmark ? (
            <BookmarkIcon style={{ color: "black" }} />
          ) : (
            <BookmarkBorderIcon />
          )}
        </IconButton>
      </CardActions>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <Truncate
            lines={!expanded && 2}
            ellipsis={
              <span>
                ...
                <Link
                  onClick={handleExpandClick}
                  style={{ position: "absolute" }}>
                  {" "}
                  Show More
                </Link>
              </span>
            }>
            {caption}
            {expanded && (
              <span>
                {" "}
                <Link
                  onClick={handleExpandClick}
                  style={{ position: "absolute" }}>
                  Show Less
                </Link>
              </span>
            )}
          </Truncate>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MainPost;
