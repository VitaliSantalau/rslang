/* eslint-disable max-len */
import {
  BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query/react';
import { IRespLogin } from '../auth/authApiSlice';
import { resetUser, setUser, toNeedRefreshToken } from '../auth/authSlice';
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

  if (result.error && result.error.status === 401) {
    // try to get a new token
    const { userId: prevUserId } = (api.getState() as RootState).auth;
    api.dispatch(toNeedRefreshToken());

    const reLoginUser = await baseQuery(`/users${prevUserId}/tokens`, api, extraOptions);

    if (reLoginUser.data) {
      const {
        userId, name, token, refreshToken,
      } = reLoginUser.data as IRespLogin;

      api.dispatch(setUser({
        userId, name, token, refreshToken,
      }));

      Object.entries(reLoginUser.data as IRespLogin).forEach(([key, value]) => {
        if (key === 'message') return;
        localStorage.setItem(key, value);
      });

      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      ['userId', 'name', 'token', 'refreshToken'].forEach((item) => {
        localStorage.removeItem(item);
      });
      api.dispatch(resetUser());
    }
  }
  return result;
};

export default baseQueryWithRefreshToken;
