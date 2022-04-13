import { combineReducers } from "redux";

import { signInReducer as signIn } from "./signIn";

export const authReducers = combineReducers({
  signIn,
});
