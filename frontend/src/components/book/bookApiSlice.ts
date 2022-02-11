import { apiSlice } from '../../app/apiSlice';

interface IPropsGetListWords {
  charter: number;
  page: number;
}

interface IPropsGetListUserWords {
  userId: string;
  filter: string;
}

export const bookApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getListWords: builder.query({
      query: ({
        charter, page,
      }: IPropsGetListWords) => `/words?group=${charter}&page=${page}`,
    }),
    getListUserWords: builder.query({
      query: ({
        id, filter,
      }: IPropsGetListUserWords) => `/users/${id}/aggregateWords?${filter}`,
    }),
  }),
});

export const {
  useGetListWordsQuery, useGetListUserWordsQuery,
} = bookApiSlice;
