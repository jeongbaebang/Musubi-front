import { ActionType, createAction, createAsyncAction, createReducer } from "typesafe-actions";

import { check as CHECK_API, singOut as SIGNOUT_API } from "@/api/auth";
import { createActionTypes, createRequesstSage } from "@/lib";
import { FailurePayload, SuccessPayload, UserState } from "@/types/modules/auth/userState";
import { call } from "redux-saga/effects";

const TEMP_SET_USER = "user/TEMP_SET_USER";
const SIGNOUT = "user/SIGNOUT";
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createActionTypes("user/CHECK");

export const tempSetUserAction = createAction(TEMP_SET_USER)<SuccessPayload>();
export const signOutAction = createAction(SIGNOUT)();
export const checkFetch = createAsyncAction(CHECK, CHECK_SUCCESS, CHECK_FAILURE)<
  undefined,
  SuccessPayload,
  FailurePayload
>();

const actions = { checkFetch, tempSetUserAction };
type CheckAction = ActionType<typeof actions>;

const initialState: UserState = {
  payload: null,
  error: null,
};

export const userReducer = createReducer<UserState, CheckAction>(initialState, {
  [TEMP_SET_USER]: (state, action) => ({
    ...state,
    payload: action.payload,
  }),
  [CHECK_SUCCESS]: (state, action) => ({
    ...state,
    payload: action.payload,
    error: null,
  }),
  [CHECK_FAILURE]: (state, action) => ({
    ...state,
    payload: null,
    error: action.payload,
  }),
});

export const checkSaga = createRequesstSage(CHECK, checkFetch, CHECK_API);
export function* siginOutSaga() {
  yield call(SIGNOUT_API);
}
