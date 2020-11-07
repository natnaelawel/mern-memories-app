import React from "react";
import Posts from "../../components/Posts/Posts";
import { Container, Grid, Grow, Typography, AppBar } from "@material-ui/core";
import memories from "../../images/memories.png";
import useStyles from "./style";
import Form from "../../components/Form/Form";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getPosts } from "../../store/actions/posts";
function Home() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    dispatch(getPosts());
    
  }, [dispatch]);

  return (
    <Container fluid="true">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" className={classes.heading} align="center">
          Memories
        </Typography>
        <img src={memories} className={classes.image} alt="memoriesLogo" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            alignItems="stretch"
            className={classes.mainContainer}
            spacing={3}
            justify="space-between"
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default Home;
