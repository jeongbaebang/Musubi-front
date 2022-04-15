import { checkFetch, tempSetUserAction } from "@/modules/auth/userState";

import { storage } from "./localStorage";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const checkUserStatus = (store: any) => {
  const user = storage("getItem")("user");

  if (!user) return;
  store.dispatch(tempSetUserAction(JSON.parse(user)));
  store.dispatch(checkFetch.request());
};
