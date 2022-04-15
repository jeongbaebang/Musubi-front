import { signOutAction } from "@/modules/auth/userState";
import { useDispatch } from "react-redux";

export const useSignOut = () => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutAction());
  };

  return { signOut };
};
