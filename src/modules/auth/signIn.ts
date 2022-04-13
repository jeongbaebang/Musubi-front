import { ActionType, createAction, createAsyncAction, createReducer } from "typesafe-actions";

import { signIn as API } from "@/api/auth";
import { createActionTypes, createRequesstSage } from "@/lib";
import { RequestPayload, SuccessPayload, SignInState } from "@/types/modules/auth/signIn";

const INIT_SIGNIN_FORM = "auth/INIT_SIGNIN_FORM";
const [SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE] = createActionTypes("auth/SIGNIN");

export const initSignInForm = createAction(INIT_SIGNIN_FORM)();
export const signInFetch = createAsyncAction(SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE)<
  RequestPayload,
  SuccessPayload,
  string[]
>();

const actions = { signInFetch, initSignInForm };
type SignInAction = ActionType<typeof actions>;

const initialState: SignInState = {
  payload: null,
  error: null,
};

export const signInReducer = createReducer<SignInState, SignInAction>(initialState, {
  [INIT_SIGNIN_FORM]: state => ({
    ...state,
    payload: null,
    error: null,
  }),
  [SIGNIN_SUCCESS]: (state, action) => ({
    ...state,
    payload: action.payload,
    error: null,
  }),
  [SIGNIN_FAILURE]: (state, action) => ({
    ...state,
    payload: null,
    error: action.payload,
  }),
});

export const signInSaga = createRequesstSage(SIGNIN, signInFetch, API);
