import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import { loadingReducer as loading } from "./loading";
import { authReducers as auth, authSaga } from "./auth";

export const rootReducer = combineReducers({
  auth,
  loading,
});

export function* rootSaga() {
  yield all([authSaga()]);
}

export type RootState = ReturnType<typeof rootReducer>;
