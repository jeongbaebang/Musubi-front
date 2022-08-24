import { atom } from "recoil";

export const userInfo = atom({
  key: "USER",
  default: {
    username: "",
    token: "",
  },
});
