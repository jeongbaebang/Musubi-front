import { combineReducers } from "redux";
import { takeLatest } from "redux-saga/effects";

import { signUpFetch, signUpReducer as signUp, signUpSaga } from "./signUp";
import { signInFetch, signInReducer as signIn, signInSaga } from "./signIn";
import { userReducer as user } from "./userState";

export const authReducers = combineReducers({
  signIn,
  signUp,
  user,
});

export function* authSaga() {
  yield takeLatest(signInFetch.request, signInSaga);
  yield takeLatest(signUpFetch.request, signUpSaga);
}
