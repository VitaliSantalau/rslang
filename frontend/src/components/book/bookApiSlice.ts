import { apiSlice } from '../../app/apiSlice';

interface IPropsGetListWords {
  charter: number;
  page: number;
}

interface IPropsGetListUserWords {
  userId: string;
}

interface IPropsCreateWord {
  userId: string;
  wordId: string;
  word: string;
  // {
  //   difficulty: string;
  //   optional: unknown;

  // }
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
        userId,
      }: IPropsGetListUserWords) => `/users/${userId}/words`,
    }),
    createWord: builder.mutation<any, IPropsCreateWord>({
      query: ({ userId, wordId, word }) => ({
        url: `users/${userId}/words/${wordId}`,
        method: 'POST',
        body: word,
      }),
    }),
  }),
});

export const {
  useGetListWordsQuery, useGetListUserWordsQuery, useCreateWordMutation,
} = bookApiSlice;
