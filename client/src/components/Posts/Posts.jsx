import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./Post/Post";
import useStyles from "./style";

function Posts({setCurrentId}) {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
//   useEffect(() => {}, []);
  console.log(posts, ' is post data ');
  return (
    <div>
      {posts && posts.length > 0 ? (
        <Grid
          className={classes.mainContainer}
          container
          alignItems="stretch"
          spacing={3}
        >
          {posts?.map((post) => (
            <Grid item key={post._id} xs={12} sm={6} md={4} xl={3}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}

export default Posts;
