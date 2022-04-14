import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/modules";
import { signUpFetch } from "@/modules/auth/signUp";
import { signInFetch } from "@/modules/auth/signIn";
import { RequestPayload } from "@/types/modules/auth/signUp";

export const useForm = (type: "signIn" | "signUp") => {
  const formFetch = type === "signIn" ? signInFetch : signUpFetch;

  const { payload, error, loading } = useSelector((state: RootState) => ({
    payload: state.auth[type].payload,
    error: state.auth[type].error,
    loading: state.loading[`auth/${type}`],
  }));

  const dispatch = useDispatch();

  const fetch = (paylaod: RequestPayload) => {
    dispatch(formFetch.request(paylaod));
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
