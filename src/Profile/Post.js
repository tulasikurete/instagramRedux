import { Box,List, ListItem } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export default function Post() {
  const post = useSelector((state) => state.instra.posts);
  return (
    <Box>
      <div style={{ display: "flex", flexWrap: "wrap", width: 500 }}>
        {post.map(({ images }, i) => (
          <List>
            <ListItem>
              <img src={images} />
            </ListItem>
          </List>
        ))}
      </div>
    </Box>
  );
}
