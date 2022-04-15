import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/modules";
import { signUpFetch } from "@/modules/auth/signUp";
import { RequestPayload } from "@/types/modules/auth/signUp";

export const useSignUp = () => {
  const dispatch = useDispatch();
  const { payload, error, loading } = useSelector((state: RootState) => ({
    payload: state.auth.signUp.payload,
    error: state.auth.signUp.error,
    loading: state.loading["auth/SIGNUP"],
  }));

  const fetch = (paylaod: RequestPayload) => {
    dispatch(signUpFetch.request(paylaod));
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
