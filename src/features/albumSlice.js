import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchAlbums = createAsyncThunk(
  "albums/fetchAlbums",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/get-album`, {
        withCredentials: true,
      });
      console.log(console.log("fetch album: ", response.data));
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch album"
      );
    }
  }
);

export const fetchAlbumDetails = createAsyncThunk(
  "albums/fetchAlbumDetails",
  async (albumId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/getAlbum/${albumId}`, {
        withCredentials: true,
      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch album details!"
      );
    }
  }
);

export const createAlbum = createAsyncThunk(
  "albums/createAlbum",
  async ({ name, createdBy }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_URL}/create-album`,
        { name, createdBy },
        { withCredentials: true }
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Album create successfully!"
      );
    }
  }
);

export const deleteAlbum = createAsyncThunk(
  "albums/deleteAlbum",
  async (albumId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${API_URL}/delete-album/${albumId}`,
        { withCredentials: true }
      );
      return albumId;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Album Deletion error!"
      );
    }
  }
);

const initialState = {
  albums: [],
  albumDetails: null,
  loading: false,
  error: null,
  albumCreated: false,
};

const albumSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    resetAlbumDetails(state) {
      state.albumDetails = null;
    },
    resetAlbumCreated(state) {
      state.albumCreated = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetching albums
      .addCase(fetchAlbums.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAlbums.fulfilled, (state, action) => {
        state.loading = false;
        state.albums = action.payload;
      })
      .addCase(fetchAlbums.rejected, (state) => {
        state.loading = false;
        state.albums = [];
        state.error = action.payload;
      })
      // fetching album details
      .addCase(fetchAlbumDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAlbumDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.albumDetails = action.payload;
      })
      .addCase(fetchAlbumDetails.rejected, (state, action) => {
        state.loading = false;
        state.albumDetails = null;
        state.error = action.payload;
      })
      // create album
      .addCase(createAlbum.pending, (state) => {
        state.loading = true;
      })
      .addCase(createAlbum.fulfilled, (state, action) => {
        state.loading = false;
        state.albumCreated = true;
        state.albums.push(action.payload);
      })
      .addCase(createAlbum.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.albumCreated = false;
      })
      // delete album
      .addCase(deleteAlbum.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAlbum.fulfilled, (state, action) => {
        state.loading = false;
        state.albums = state.albums.filter(
          (album) => album._id != action.payload
        );
      })
      .addCase(deleteAlbum.rejected, (state) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetAlbumDetails, resetAlbumCreated } = albumSlice.actions;

export default albumSlice.reducer;
