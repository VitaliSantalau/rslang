import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseServerURL } from '../constants/constants';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: baseServerURL,
  }),
  endpoints: () => ({}),
});
