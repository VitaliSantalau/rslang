import { apiSlice } from '../../app/apiSlice';

interface IPropsGetListWords {
  charter: number;
  page: number;
}

export const bookApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getListWords: builder.query({
      query: ({
        charter, page,
      }: IPropsGetListWords) => `/words?group=${charter}&page=${page}`,
    }),
  }),
});

export const { useGetListWordsQuery } = bookApiSlice;
