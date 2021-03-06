import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['MogifyWord'],
  endpoints: () => ({}),
});
