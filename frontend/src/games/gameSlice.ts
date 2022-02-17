/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface IInitialState {
  mode: 'start' | 'play' | 'result';
  source: 'main' | 'book';
  charter: number;
  page: number;
}

const initialState: IInitialState = {
  mode: 'start',
  source: 'main',
  charter: 1,
  page: 1,
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
    setLevel(
      state,
      action: PayloadAction<number>,
    ) {
      state.charter = action.payload;
    },
  },
});

export const {
  changeMode, setLevel,
} = gameSlice.actions;

export const selectCharter = (state: RootState) => state.game.charter;
export const selectPage = (state: RootState) => state.game.page;
export const selectMode = (state: RootState) => state.game.mode;

export default gameSlice.reducer;
