import {
  Box,
  Button,
  Grid,
  Input,
  InputLabel,
  List,
  ListItem,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import { createPosts } from "./storeRedux/Postadd";
import { useDispatch } from "react-redux";
export default function CreateModel() {
  const [author, setAuthor] = useState("");
  const [images, setImage] = useState([]);
  const [caption, setCaption] = useState("");
  const [list, setList] = useState([]);
  const submitHandler = () => {
    let img = [...images, list];
    setImage(img);
  };
  const dispatch = useDispatch();

  const postHandler = (e) => {
    e.preventDefault();
    dispatch(createPosts({ images, caption, author }));
  };
  return (
    <Box>
      <h5 style={{ marginLeft: 200 }}>Create new post</h5>

      <hr />

      <Paper>
        <InputLabel style={{}}>Author</InputLabel>
        <Input onChange={(e) => setAuthor(e.target.value)} />
        <InputLabel>Image</InputLabel>

        <Input onChange={(e) => setList(e.target.value)} />
        <Button onClick={submitHandler}>Submit</Button>
        {images.map((images, i) => (
          <List>
            <ListItem>{images}</ListItem>
          </List>
        ))}
        <InputLabel>Caption</InputLabel>
        <Input onChange={(e) => setCaption(e.target.value)} />
      </Paper>
      <Button onClick={postHandler}> Add post</Button>
    </Box>
  );
}
