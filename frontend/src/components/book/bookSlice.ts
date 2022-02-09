/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface IInitialState {
  charter: string;
  page: string;
}

const initialState: IInitialState = {
  charter: '1',
  page: '1',
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    changeCharter(state, action) {
      state.page = '1';
      state.charter = action.payload;
    },
    changePage(state, action) {
      state.page = action.payload;
    },
  },
});

export const { changeCharter, changePage } = bookSlice.actions;

export const selectCharter = (state: RootState) => +state.book.charter;
export const selectPage = (state: RootState) => +state.book.page;

export default bookSlice.reducer;
