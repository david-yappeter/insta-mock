import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "../pages/Post/redux/slice";

export default configureStore({
  reducer: {
    post: postSlice,
  },
});
