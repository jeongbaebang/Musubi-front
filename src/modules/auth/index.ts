import { combineReducers } from "redux";
import { takeLatest } from "redux-saga/effects";

import { signUpFetch, signUpReducer as signUp, signUpSaga } from "./signUp";
import { signInFetch, signInReducer as signIn, signInSaga } from "./signIn";
import {
  checkFetch,
  userReducer as user,
  checkSaga,
  signOutAction,
  siginOutSaga,
} from "./userState";

export const authReducers = combineReducers({
  signIn,
  signUp,
  user,
});

export function* authSaga() {
  yield takeLatest(signInFetch.request, signInSaga);
  yield takeLatest(signUpFetch.request, signUpSaga);
  yield takeLatest(checkFetch.request, checkSaga);
  yield takeLatest(signOutAction, siginOutSaga);
}
