import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = 'kuthUWvshcAnZJtJpDT9';
const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books`;

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get(baseUrl);
    const resData = res.data;
    if (resData === '') return [];

    const arrayOfItems = Object.keys(resData).map((key) => {
      const item = resData[key][0];
      return {
        itemId: key,
        author: item.author,
        title: item.title,
        category: item.category,
      };
    });
    return arrayOfItems;
  } catch (error) {
    return rejectWithValue('Failed to fetch books');
  }
});

export const addBookAsync = createAsyncThunk('books/addBook', async (newBook, { rejectWithValue }) => {
  try {
    const res = await axios.post(baseUrl, newBook);
    return res.data;
  } catch (error) {
    return rejectWithValue('Failed to add book');
  }
});

export const removeBookAsync = createAsyncThunk('books/removeBook', async (itemId, { rejectWithValue }) => {
  try {
    await axios.delete(`${baseUrl}/${itemId}`);
    return itemId;
  } catch (error) {
    return rejectWithValue('Failed to remove book');
  }
});

const initialState = {
  books: [],
  statusFetch: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  statusAdd: 'idle',
  statusRemove: 'idle',
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      const itemToRemove = action.payload;
      return state.filter((book) => book.item_id !== itemToRemove);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.statusFetch = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.statusFetch = 'succeeded';
        state.books = action.payload;
      })
      .addCase(addBookAsync.pending, (state) => {
        state.statusAdd = 'loading';
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.statusAdd = 'succeeded';
        state.books.push(action.payload);
      })
      .addCase(removeBookAsync.pending, (state) => {
        state.statusRemove = 'loading';
      })
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        state.statusRemove = 'succeeded';
        state.books = state.books.filter((book) => book.itemId !== action.payload);
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
