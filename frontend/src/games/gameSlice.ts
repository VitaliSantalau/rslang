/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface IInitialState {
  mode: 'start' | 'play' | 'result';
  source: 'main' | 'book';
  charter: number;
  page: number;
  correct: [],
  error: [],
}

const initialState: IInitialState = {
  mode: 'start',
  source: 'main',
  charter: 1,
  page: 1,
  correct: [],
  error: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    changeMode(
      state,
      action: PayloadAction<'start' | 'play' | 'result'>,
    ) {
      state.mode = action.payload;
    },
    setSource(
      state,
      action: PayloadAction<'main' | 'book'>,
    ) {
      state.source = action.payload;
    },
    setLevel(
      state,
      action: PayloadAction<number>,
    ) {
      state.charter = action.payload;
    },
  },
});

export const {
  changeMode, setLevel, setSource,
} = gameSlice.actions;

export const selectSource = (state: RootState) => state.game.source;
export const selectCharter = (state: RootState) => state.game.charter - 1;
export const selectPage = (state: RootState) => state.game.page - 1;
export const selectMode = (state: RootState) => state.game.mode;

export default gameSlice.reducer;
