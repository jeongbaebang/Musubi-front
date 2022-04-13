import { combineReducers } from "redux";
import { takeLatest } from "redux-saga/effects";

import { signInFetch, signInReducer as signIn, signInSaga } from "./signIn";

export const authReducers = combineReducers({
  signIn,
});

export function* authSaga() {
  yield takeLatest(signInFetch.request, signInSaga);
}
