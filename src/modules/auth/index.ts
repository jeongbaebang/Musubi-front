import { combineReducers } from "redux";
import { takeLatest } from "redux-saga/effects";

import { signUpReducer as signUp } from "./signUp";
import { signInFetch, signInReducer as signIn, signInSaga } from "./signIn";

export const authReducers = combineReducers({
  signIn,
  signUp,
});

export function* authSaga() {
  yield takeLatest(signInFetch.request, signInSaga);
}
