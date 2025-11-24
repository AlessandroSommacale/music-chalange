import { AlbumsJson } from '@/types/album';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

export const albumsApi = createApi({
  reducerPath: 'albumsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://itunes.apple.com',
  }),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extractRehydrationInfo(action: any, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getTopAlbums: builder.query<AlbumsJson, void>({
      query: () => '/us/rss/topalbums/limit=100/json',
    }),
  }),
});

export const { useGetTopAlbumsQuery } = albumsApi;
