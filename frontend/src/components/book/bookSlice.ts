import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  charter: '1',
  page: '1',
  listwords: [
    { id: '1', word: 'first' },
    { id: '2', word: 'second' },
    { id: '3', word: 'first' },
  ],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
});

export default bookSlice.reducer;
