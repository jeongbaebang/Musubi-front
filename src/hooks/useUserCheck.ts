import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { useFetch } from "./useSWR";
import { userInfo } from "src/recoil/atoms/user";

export const isLoggedIn = (user: { username: string; token: string }) => {
  return Boolean(user?.username && user?.token);
};

export const useUserCheck = () => {
  const [user, setUser] = useRecoilState(userInfo);
  const { payload, isLoading, isError } = useFetch("/api/auth/check");

  useEffect(() => {
    if (!isError && !isLoading) {
      setUser(prevData => ({
        ...prevData,
        username: payload.username,
      }));
    }
  }, [setUser, payload, isLoading, isError]);

  return { user };
};
