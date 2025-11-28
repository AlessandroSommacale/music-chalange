import { firebaseConfig } from '../../../firebaseConfig';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface loginUserArg {
  email: string;
  password: string;
}

export interface UserState {
  kind: string;
  localId: string;
  email: string;
  displayName: string;
  idToken: string;
  registered: false;
}

export const identityApi = createApi({
  reducerPath: 'identityApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://identitytoolkit.googleapis.com',
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<UserState, loginUserArg>({
      query: (queryArg) => ({
        url: `/v1/accounts:signInWithPassword`,
        method: 'POST',
        params: { key: firebaseConfig.apiKey },
        body: queryArg,
      }),
    }),
    registerUser: builder.mutation<UserState, loginUserArg>({
      query: (queryArg) => ({
        url: `/v1/accounts:signUp`,
        method: 'POST',
        params: { key: firebaseConfig.apiKey },
        body: queryArg,
      }),
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = identityApi;
