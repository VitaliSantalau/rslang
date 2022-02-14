/* eslint-disable max-len */
import { apiSlice } from '../../app/apiSlice';
import { IUserWord } from '../../interfaces/IWord';

interface IPropsGetListWords {
  charter: number;
  page: number;
}

interface IPropsGetListUserWords {
  userId: string;
  charter: number;
  page: number;
}

interface IRespGetListUserWords {
  paginatedResults: IUserWord[]
}

interface IPropsCreateWord {
  userId: string;
  wordId: string;
  word: {
    difficulty: 'neut'|'hard'|'learned';
    optional: unknown;
  };
}

interface IPropsUpdateWord {
  userId: string;
  wordId: string;
  word: {
    difficulty: 'neut'|'hard'|'learned';
    optional: unknown;
  };
}

interface IPropsDeleteWord {
  userId: string;
  wordId: string;
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
        userId, charter, page,
      }: IPropsGetListUserWords) => `/users/${userId}/aggregatedWords?group=${charter}&page=${page}&{}`,
      transformResponse(response: IRespGetListUserWords[]) {
        return response
          ? response[0].paginatedResults.filter((el: IUserWord) => el.userWord)
          : [];
      },
      providesTags: ['MogifyWord'],
    }),
    createWord: builder.mutation<unknown, IPropsCreateWord>({
      query: ({ userId, wordId, word }) => ({
        url: `users/${userId}/words/${wordId}`,
        method: 'POST',
        body: word,
      }),
      invalidatesTags: ['MogifyWord'],
    }),
    updateWord: builder.mutation<unknown, IPropsUpdateWord>({
      query: ({ userId, wordId, word }) => ({
        url: `users/${userId}/words/${wordId}`,
        method: 'PUT',
        body: word,
      }),
      invalidatesTags: ['MogifyWord'],
    }),
    deleteWord: builder.mutation<unknown, IPropsDeleteWord>({
      query: ({ userId, wordId }) => ({
        url: `users/${userId}/words/${wordId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['MogifyWord'],
    }),
  }),
});

export const {
  useGetListWordsQuery, useGetListUserWordsQuery, useCreateWordMutation,
  useUpdateWordMutation, useDeleteWordMutation,
} = bookApiSlice;
