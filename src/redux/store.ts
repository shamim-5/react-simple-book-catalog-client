import { configureStore } from "@reduxjs/toolkit";
import booksSliceReducer from "./features/books/booksSlice";
import { apiSlice } from "./api/apiSlice";
import authSliceReducer from "./features/auth/authSlice";
import helperSliceReducer from "./features/helper/helperSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    books: booksSliceReducer,
    helper: helperSliceReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
