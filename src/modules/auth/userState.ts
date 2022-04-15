import { ActionType, createAction, createAsyncAction, createReducer } from "typesafe-actions";

import { createActionTypes } from "@/lib";
import { FailurePayload, SuccessPayload, UserState } from "@/types/modules/auth/userState";

const TEMP_SET_USER = "user/TEMP_SET_USER";
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createActionTypes("user/CHECK");

export const tempSetUserAction = createAction(TEMP_SET_USER)<SuccessPayload>();
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
