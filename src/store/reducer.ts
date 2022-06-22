import { configureStore } from "@reduxjs/toolkit";
import folderApi from "../services/folder";

const reducer = {
  [folderApi.reducerPath]: folderApi.reducer,
};

export const store = configureStore({
  reducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
