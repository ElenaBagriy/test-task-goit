import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./usersSlice";
import { filtersReducer } from "./filterSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const userConfig = {
  key: "users",
  storage,
  whitelist: ["users", "followingUsers" ],
};

export const store = configureStore({
  reducer: {
    users: persistReducer(userConfig, usersReducer),
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
