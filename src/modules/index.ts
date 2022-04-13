import { combineReducers } from "redux";

import { authReducers as auth } from "./auth";
import { loadingReducer as loading } from "./loading";

export const rootReducer = combineReducers({
  auth,
  loading,
});

export type RootState = ReturnType<typeof rootReducer>;
