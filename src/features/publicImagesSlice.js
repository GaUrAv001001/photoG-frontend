import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchPublicImages = createAsyncThunk(
  "images/fetchPublicImages",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/get-public-images`, {
        withCredentials: true,
      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "failed to fetch public images!"
      );
    }
  }
);

const initialState = {
  images: [],
  loading: false,
  error: null,
};

const publicImagesSlice = createSlice({
  name: "publicImages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPublicImages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPublicImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })
      .addCase(fetchPublicImages.rejected, (state) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default publicImagesSlice.reducer;
