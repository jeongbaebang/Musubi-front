import { useSelector } from "react-redux";

import { RootState } from "@/modules";

export const useUserState = () => {
  const { user } = useSelector(({ auth }: RootState) => ({
    user: auth.user.payload,
  }));

  return { user };
};
