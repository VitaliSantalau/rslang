/* eslint-disable max-len */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rs-lang-b.herokuapp.com',
  }),
  endpoints: (builder) => ({
    getListWords: builder.query({
      query: ({ charter, page }: { charter: number, page: number }) => `/words?group=${charter}&page=${page}`,
    }),
  }),
});

export const { useGetListWordsQuery } = apiSlice;
