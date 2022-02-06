/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  charter: '1',
  page: '1',
  status: 'idle',
  error: null || '',
  listwords: [
    { id: '1', word: 'first' },
    { id: '2', word: 'second' },
    { id: '3', word: 'third' },
  ],
};

export const fetchWords = createAsyncThunk('book/fetchListWords', async () => {
  const response = await client.get('/fakeApi/posts');
  return response.data;
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    changeCharter(state, action) {
      state.charter = action.payload;
    },
    changePage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchWords.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchWords.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched words to the array
        state.listwords = state.listwords.concat(action.payload);
      });
    // .addCase(fetchWords.rejected, (state, action) => {
    //   state.status = 'failed';
    //   state.error = action.error.message;
    // });
  },
});

export const { changeCharter, changePage } = bookSlice.actions;

export default bookSlice.reducer;
