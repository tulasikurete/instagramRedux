import { Grid, Box } from "@mui/material";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Comment from "./Comment";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import { updatePost } from "./storeRedux/Postadd";

export default function Homedata() {
  const post = useSelector((state) => state.instra.posts);
  const dispatch = useDispatch();

  const likeHandler = (event, index) => {
    let count = post[index].like_count ?? 0;
    count += 1;

    event.preventDefault();
    dispatch(updatePost({ like_count: count, index }));
  };
  return (
    <Grid style={{ borderLeft: "1px solid grey" }}>
      <Grid style={{ paddingLeft: 100, paddingRight: 100 }}>
        {post.map(({ images, author, caption, like_count }, i) => (
          <Card sx={{ maxWidth: 500, marginTop: 5 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {/* <img style={{ width: 40, borderRadius: 50 }} src={dp} /> */}
                </Avatar>
              }
              title={author}
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
            />

            <Carousel
              NextIcon=">"
              PrevIcon="<"
              autoPlay={false}
              autoPlaySpeed={3000}
            >
              {images.map((image, i) => (
                <img src={image} style={{ width: 500 }} />
              ))}
            </Carousel>

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {caption}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="share">
                <FavoriteIcon onClick={(e) => likeHandler(e, i)} />
              </IconButton>
              <p>{like_count}</p>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ChatBubbleOutlineIcon />
              </IconButton>
              <IconButton aria-label="share" style={{ paddingLeft: 340 }}>
                <TurnedInNotIcon />
              </IconButton>
            </CardActions>
            <Comment />
          </Card>
        ))}
      </Grid>
    </Grid>
  );
}
