/* eslint-disable max-len */
import { apiSlice } from '../app/apiSlice';
import { IUserWord } from '../interfaces/IWord';

interface IPropsGetMainWords {
  charter: number;
  page: number;
}

interface IPropsGetBookWords {
  userId: string;
  charter: number;
  page: number;
}

interface IRespGetBookWords {
  paginatedResults: IUserWord[]
}

export const gameApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMainWords: builder.query({
      query: ({
        charter, page,
      }: IPropsGetMainWords) => `/words?group=${charter}&page=${page}`,
    }),
    getBookWords: builder.query({
      query: ({
        userId, charter, page,
      }: IPropsGetBookWords) => (
        `/users/${userId}/aggregatedWords?group=${charter}&page=${page}`
      ),
      transformResponse(response: IRespGetBookWords[]) {
        return response[0].paginatedResults;
      },
      providesTags: ['MogifyWord'],
    }),
  }),
});

export const {
  useGetMainWordsQuery, useGetBookWordsQuery,
} = gameApiSlice;
