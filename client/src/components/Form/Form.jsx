import React, { useEffect, useState } from "react";
import {
  Paper,
  TextField,
  Typography,
  Button,
  CircularProgress,
} from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../store/actions/posts";
function Form({ setCurrentId, currentId }) {
  const [formData, setFormData] = useState({
    creator: "",
    title: "",
    selectedFile: "",
    message: "",
    tags: "",
  });
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const post = useSelector((state) =>
    state.posts.find((p) => p._id === currentId)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentId) {
      setFormData(post);
    }
  }, [post, currentId]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const {creator, title, message, tags} = await fetchPost(currentId);
  //     setFormData({
  //       creator,
  //       title,
  //       message,
  //       tags
  //     });
  //   };

  //   if (currentId) {
  //     fetchData();
  //   }
  // }, [currentId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    let data;
    if (currentId) {
      data = await dispatch(updatePost(currentId, formData));
    } else {
      data = await dispatch(createPost(formData));
    }
    if (data) {
      console.log("data is created successfully", data);
    }
    setLoading(false);
    clearFormData();
  };
  const handleChange = (type='any') => (e) => {
    e.preventDefault();
    let value = e.target.value;
    if (type === "tags") {
      value = e.target.value.split(",");
    }
    setFormData({ ...formData, [type]: value });
  };
  const clearFormData = () => {
    setCurrentId(null);
    setFormData({
      title: "",
      tags: "",
      message: "",
      creator: "",
      selectedFile: "",
    });
  };
  return (
    <Paper className={classes.paper}>
      <form
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Typography variant="h6">
          {currentId ? "Updating a memory" : "Creating a memory"}
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          fullWidth
          label="Creator"
          value={formData.creator}
          onChange={handleChange("creator")}
        />
        <TextField
          name="title"
          variant="outlined"
          fullWidth
          label="Title"
          value={formData.title}
          onChange={handleChange("title")}
        />
        <TextField
          name="message"
          variant="outlined"
          fullWidth
          label="Message"
          value={formData.message}
          onChange={handleChange("message")}
        />
        <TextField
          name="tags"
          variant="outlined"
          fullWidth
          label="Tags"
          value={formData.tags}
          onChange={handleChange("tags")}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            value={formData.selectedFile}
            onDone={({ base64 }) =>
              setFormData({ ...formData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          type="submit"
          variant="contained"
          size="large"
          color="primary"
          fullWidth
          disabled={loading}
        >
          {loading && (
            <CircularProgress
              size={20}
              style={{ color: "white", margin: "0 10px" }}
              mx="2"
            />
          )}
          Submit
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          size="large"
          fullWidth
          onClick={(e) => {
            e.preventDefault();
            clearFormData();
          }}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}

export default Form;
