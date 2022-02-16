/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface IInitialState {
  charter: number;
  page: number;
  mode: 'start' | 'play' | 'result';
}

const initialState: IInitialState = {
  charter: 1,
  page: 1,
  mode: 'start',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    changeMode(
      state,
      action: PayloadAction<{
        mode: 'start' | 'play' | 'result'
      }>,
    ) {
      const { mode } = action.payload;
      state.mode = mode;
    },
    setLevel(
      state,
      action: PayloadAction<{
        charter: number, page: number,
      }>,
    ) {
      const { charter, page } = action.payload;
      state.charter = charter;
      state.page = page;
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
