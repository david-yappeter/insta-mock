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

const MainPost = () => {
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
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <MoreDialog open={moreDialogOpen} onClose={handleMoreDialogOnClose} />
      <CardMedia
        // style={{ position: "relative" }}
        onDoubleClick={handleLiked}
        className={classes.media}
        image={dummyImage}
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
            <BookmarkBorderIcon />
          ) : (
            <BookmarkIcon style={{ color: "black" }} />
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
                <Link onClick={handleExpandClick}> Show More</Link>
              </span>
            }>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like. Heat oil in a (14- to 16-inch) paella pan
            or a large, deep skillet over medium-high heat. Add chicken, shrimp
            and chorizo, and cook, stirring occasionally until lightly browned,
            6 to 8 minutes. Transfer shrimp to a large plate and set aside,
            leaving chicken and chorizo in the pan. Add pimentón, bay leaves,
            garlic, tomatoes, onion, salt and pepper, and cook, stirring often
            until thickened and fragrant, about 10 minutes. Add saffron broth
            and remaining 4 1/2 cups chicken broth; bring to a boil.
            {expanded && (
              <span>
                {" "}
                <Link onClick={handleExpandClick}>Show Less</Link>
              </span>
            )}
          </Truncate>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MainPost;
