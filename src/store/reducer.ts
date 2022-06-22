import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({});

export const store = configureStore({
  reducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
