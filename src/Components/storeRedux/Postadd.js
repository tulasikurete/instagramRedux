import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
  posts: [],
  count: 0,
};

const PostAdd = createSlice({
  name: "instra",
  initialState,
  reducers: {
    createPosts: (state, action) => {
      const { images, caption, author, like_count } = action.payload;
      const post = [...state.posts, { images, caption, author, like_count }];
      state.posts = post;
    },
    updatePost: (state, action) => {
      const { like_count, index } = action.payload;
      state.posts[index].like_count = like_count;
      state.posts = state.posts;
    },

    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state, action) => {
      state.count -= 1;
    },
  },
});
export const { createPosts, updatePost, increment, decrement } =
  PostAdd.actions;
export default PostAdd.reducer;
