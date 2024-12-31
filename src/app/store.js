import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import albumReducer from "../features/albumSlice";
import publicImageReducer from "../features/publicImagesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    albums: albumReducer,
    publicImg: publicImageReducer,
  },
});

export default store;
