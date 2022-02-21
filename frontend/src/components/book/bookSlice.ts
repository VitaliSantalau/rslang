/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface IInitialState {
  charter: string;
  page: string;
}

const initialState: IInitialState = {
  charter: localStorage.getItem('charter') || '1',
  page: localStorage.getItem('page') || '1',
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    changeCharter(
      state,
      action: PayloadAction<number>,
    ) {
      state.page = '1';
      state.charter = `${action.payload}`;
    },
    changePage(
      state,
      action: PayloadAction<number>,
    ) {
      state.page = `${action.payload}`;
    },
  },
});

export const {
  changeCharter, changePage,
} = bookSlice.actions;

export const selectCharter = (state: RootState) => +state.book.charter;
export const selectPage = (state: RootState) => +state.book.page;

export default bookSlice.reducer;
