/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export type TAnswer = {
  id: string;
  word: string;
  translate: string;
}

interface IInitialState {
  mode: 'start' | 'play' | 'result';
  source: 'main' | 'book';
  charter: number;
  page: number;
  correct: [] | TAnswer[],
  error: [] | TAnswer[],
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
      action: PayloadAction<{charter: number, page: number}>,
    ) {
      const { charter, page } = action.payload;
      state.charter = charter;
      state.page = page;
    },
    setCorrect(
      state,
      action: PayloadAction<TAnswer>,
    ) {
      state.correct = [
        ...state.correct, action.payload,
      ];
    },
    setError(
      state,
      action: PayloadAction<TAnswer>,
    ) {
      state.error = [
        ...state.error, action.payload,
      ];
    },
    resetAnswers(state) {
      state.correct = [];
      state.error = [];
    },
    resetMode(state) {
      state.mode = 'start';
    },
  },
});

export const {
  changeMode, setLevel, setSource, setCorrect,
  setError, resetAnswers, resetMode,
} = gameSlice.actions;

export const selectSource = (state: RootState) => state.game.source;
export const selectCharter = (state: RootState) => state.game.charter - 1;
export const selectPage = (state: RootState) => state.game.page - 1;
export const selectMode = (state: RootState) => state.game.mode;
export const selectCorrect = (state: RootState) => state.game.correct;
export const selectError = (state: RootState) => state.game.error;

export default gameSlice.reducer;
