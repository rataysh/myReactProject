import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import searchSlice from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
