import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBooks: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book !== action.payload.id);
    },
  },
});

export const { addBooks, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
