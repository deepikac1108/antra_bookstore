// src/redux/bookSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (query) => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=0&maxResults=20`
    );
    return response.data.items;
  }
);

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    wishlist: [],
    loading: false,
  },
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (book) => book.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { addToWishlist, removeFromWishlist } = bookSlice.actions;
export default bookSlice.reducer;