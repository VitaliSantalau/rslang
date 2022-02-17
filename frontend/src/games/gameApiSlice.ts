/* eslint-disable max-len */
import { apiSlice } from '../app/apiSlice';
import { IUserWord, IWord } from '../interfaces/IWord';

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
    getMainWords: builder.query<IWord[], IPropsGetMainWords>({
      query: ({
        charter, page,
      }) => `/words?group=${charter}&page=${page}`,
    }),
    getBookWords: builder.query<IUserWord[], IPropsGetBookWords>({
      query: ({
        userId, charter, page,
      }) => (
        `/users/${userId}/aggregatedWords?group=${charter}&page=${page}&wordsPerPage=20`
      ),
      transformResponse(response: IRespGetBookWords[]) {
        return response[0].paginatedResults;
      },
    }),
  }),
});

export const {
  useGetMainWordsQuery, useGetBookWordsQuery,
} = gameApiSlice;
