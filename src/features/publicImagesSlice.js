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

export const uploadImage = createAsyncThunk(
  "images/uploadImage",
  async (formData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      };
      const response = await axios.post(`${API_URL}/upload-image`, formData, config);
      return response.data.data; // Assuming the uploaded image data is returned here
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to upload image!"
      );
    }
  }
);

const initialState = {
  images: [],
  loading: false,
  error: null,
  uploadSuccess: false,
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
      })
      // Upload Image
      .addCase(uploadImage.pending, (state)=>{
        state.loading = true;
        state.uploadSuccess = false;
      })
      .addCase(uploadImage.fulfilled, (state, action)=>{
        state.loading = false;
        state.images.push(action.payload);
      })
      .addCase(uploadImage.rejected, (state, action)=>{
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export default publicImagesSlice.reducer;
