import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const animeApi = createApi({
  reducerPath: "anime",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => {
    return {
      fetchPopularAnime: builder.query({
        query: () => {
          return {
            url: "/popular",
            method: "GET",
          };
        },
      }),
      animeDetails: builder.query({
        query: (animeId) => {
          return {
            url: `/anime-details/${animeId}`,
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchPopularAnimeQuery, useFetchAnimeDetailsQuery } =
  animeApi;
export { animeApi };
