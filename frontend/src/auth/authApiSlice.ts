import { apiSlice } from '../app/apiSlice';

interface IPropsRegister {
  name: string;
  email: string;
  password: string;
}

interface IRespRegister {
  name: string;
  email: string;
  password: string;
}

interface IPropsLogin {
  email: string;
  password: string;
}

export interface IRespLogin {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
}

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<IRespRegister, IPropsRegister>({
      query: (body) => ({
        url: '/users',
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation<IRespLogin, IPropsLogin >({
      query: (body) => ({
        url: '/signin',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useRegisterMutation, useLoginMutation,
} = authApiSlice;
