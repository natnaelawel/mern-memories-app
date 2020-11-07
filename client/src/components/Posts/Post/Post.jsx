import React from "react";
import {
  Card,
  CardActions,
  CardMedia,
  Button,
  Typography,
  CardContent,
} from "@material-ui/core";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../store/actions/posts";

function Post({ post, setCurrentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };
  const handleLike = (id) => {
    dispatch(likePost(id));
  };
  return (
    <div>
      <Card className={`${classes.card} ${classes.fullHeightCard}`}>
        <CardMedia
          image={post.selectedFile}
          className={classes.media}
          title={post.title}
        ></CardMedia>
        <div className={classes.overlay}>
          <Typography variant="h6"> {post.creator}</Typography>
          <Typography variant="body2">
            {" "}
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={(e) => {
              setCurrentId(post._id);
            }}
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {post.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.message}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              handleLike(post._id);
            }}
          >
            <ThumbUpAltIcon fontSize="small" />
            &nbsp; Like &nbsp;<span>{` ${post.likeCount}`}</span>
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              handleDelete(post._id);
            }}
          >
            <DeleteIcon fontSize="small" />
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Post;
