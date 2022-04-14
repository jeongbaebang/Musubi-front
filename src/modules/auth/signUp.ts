import { ActionType, createAction, createAsyncAction, createReducer } from "typesafe-actions";

import { createActionTypes } from "@/lib";
import { RequestPayload, SignUpState, SuccessPayload } from "@/types/modules/auth/signUp";

const INIT_SIGNUP_FORM = "auth/INIT_SIGNUP_FORM";
const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE] = createActionTypes("auth/SIGNUP");

export const initSignUpForm = createAction(INIT_SIGNUP_FORM)();
export const signUpFetch = createAsyncAction(SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE)<
  RequestPayload,
  SuccessPayload,
  string[]
>();

const actions = { signUpFetch, initSignUpForm };
type SignUpAction = ActionType<typeof actions>;

const initialState: SignUpState = {
  payload: null,
  error: null,
};

export const signUpReducer = createReducer<SignUpState, SignUpAction>(initialState, {
  [INIT_SIGNUP_FORM]: state => ({
    ...state,
    payload: null,
    error: null,
  }),
  [SIGNUP_SUCCESS]: (state, action) => ({
    ...state,
    payload: action.payload,
    error: null,
  }),
  [SIGNUP_FAILURE]: (state, action) => ({
    ...state,
    payload: null,
    error: action.payload,
  }),
});
