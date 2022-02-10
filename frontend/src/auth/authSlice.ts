/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface IInitialState {
  userId: string | null;
  name: string | null;
  token: string | null;
  refreshToken: string | null;
}

const initialState: IInitialState = {
  userId: null,
  name: null,
  token: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(
      state,
      action: PayloadAction<{
        userId: string, name: string; token: string, refreshToken: string,
      }>,
    ) {
      const {
        userId, name, token, refreshToken,
      } = action.payload;
      state.userId = userId;
      state.name = name;
      state.token = token;
      state.refreshToken = refreshToken;
    },
    resetUser(state) {
      state = initialState;
    },
  },
});

export const { setUser, resetUser } = authSlice.actions;

export const selectName = (state: RootState) => state.auth.name;

export default authSlice.reducer;
