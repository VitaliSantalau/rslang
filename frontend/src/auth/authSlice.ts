/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface IInitialState {
  userId: string | null;
  name: string | null;
  token: string | null;
  isNeedRefreshToken: boolean
  refreshToken: string | null;
}

const initialState: IInitialState = {
  userId: localStorage.getItem('userId') || null,
  name: localStorage.getItem('name') || null,
  token: localStorage.getItem('token') || null,
  isNeedRefreshToken: false,
  refreshToken: localStorage.getItem('refreshToken') || null,
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
      state.userId = null;
      state.name = null;
      state.token = null;
      state.isNeedRefreshToken = false;
      state.refreshToken = null;
    },
    toNeedRefreshToken(state) {
      state.isNeedRefreshToken = true;
    },
    toRefreshToken(
      state,
      action: PayloadAction<{token: string, refreshToken: string}>,
    ) {
      const { token, refreshToken } = action.payload;
      state.token = token;
      state.refreshToken = refreshToken;
    },
    resetToken(state) {
      state.token = null;
      state.isNeedRefreshToken = false;
      state.refreshToken = null;
    },
  },
});

export const {
  setUser, resetUser, toNeedRefreshToken, toRefreshToken, resetToken,
} = authSlice.actions;

export const selectUserId = (state: RootState) => state.auth.userId;
export const selectName = (state: RootState) => state.auth.name;
export const selectToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
