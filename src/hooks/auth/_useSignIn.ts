import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/modules";
import { signInFetch } from "@/modules/auth/signIn";
import { RequestPayload } from "@/types/modules/auth/signIn";

export const useSignIn = () => {
  const dispatch = useDispatch();
  const { payload, error, loading } = useSelector((state: RootState) => ({
    payload: state.auth.signIn.payload,
    error: state.auth.signIn.error,
    loading: state.loading["auth/SIGNIN"],
  }));

  const fetch = (paylaod: RequestPayload) => {
    dispatch(signInFetch.request(paylaod));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    fetch({
      username: data.get("email") as string,
      password: data.get("password") as string,
    });
  };

  useEffect(() => {
    if (payload) {
      console.log(payload);
    }
  }, [payload, error, dispatch]);

  return { loading, handleSubmit };
};
