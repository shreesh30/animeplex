import { configureStore } from "@reduxjs/toolkit";
import { animeApi } from "./apis/animeApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [animeApi.reducerPath]: animeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(animeApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useFetchPopularAnimeQuery,
  useFetchAnimeDetailsQuery,
} from "./apis/animeApi";
