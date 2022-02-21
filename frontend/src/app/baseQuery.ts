/* eslint-disable max-len */
import {
  BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query/react';
import { IRespLogin } from '../auth/authApiSlice';
import { resetToken, toNeedRefreshToken, toRefreshToken } from '../auth/authSlice';
import { baseServerURL } from '../constants/constants';
import { RootState } from './store';

const baseQuery = fetchBaseQuery({
  baseUrl: baseServerURL,
  prepareHeaders: (headers, { getState }) => {
    const {
      token, refreshToken, isNeedRefreshToken,
    } = (getState() as RootState).auth;

    const currentToken = isNeedRefreshToken ? refreshToken : token;
    if (currentToken) {
      headers.set('authorization', `Bearer ${currentToken}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (
    result.error
    && result.error.status === 'PARSING_ERROR'
    && result.error.originalStatus === 401
  ) {
    // try to get a new token
    const { userId } = (api.getState() as RootState).auth;
    api.dispatch(toNeedRefreshToken());

    const reLoginUser = await baseQuery(`/users/${userId}/tokens`, api, extraOptions);

    if (reLoginUser.data) {
      const {
        token, refreshToken,
      } = reLoginUser.data as IRespLogin;

      api.dispatch(toRefreshToken({
        token, refreshToken,
      }));

      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);

      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');

      api.dispatch(resetToken());
    }
  }
  return result;
};

export default baseQueryWithRefreshToken;
