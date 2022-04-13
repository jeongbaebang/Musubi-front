import { ActionType, createAction, createReducer } from "typesafe-actions";

import { LoadingState } from "@/types/modules/loading";

const START_LOADING = "loading/START_LOADING";
const FINISH_LOADING = "loading/FINISH_LOADING";

export const startLoading = createAction(START_LOADING)<string>();
export const finishLoading = createAction(FINISH_LOADING)<string>();

const initialState: LoadingState = {};

const actions = { startLoading, finishLoading };
type LoadingAction = ActionType<typeof actions>;

export const loadingReducer = createReducer<LoadingState, LoadingAction>(initialState, {
  [START_LOADING]: (state, action) => ({
    ...state,
    [action.payload]: true,
  }),
  [FINISH_LOADING]: (state, action) => ({
    ...state,
    [action.payload]: false,
  }),
});
