import { createSlice } from '@reduxjs/toolkit';

interface IUser {
  name: string
  email: string
}

interface IInitialState {
  user: IUser | null
  token: string | null
}

const initialState: IInitialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  },
});

export default authSlice.reducer;
