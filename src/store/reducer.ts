import { configureStore } from "@reduxjs/toolkit";
import { folderApi } from "../services/folder";

export const store = configureStore({
  reducer: {
    [folderApi.reducerPath]: folderApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(folderApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
