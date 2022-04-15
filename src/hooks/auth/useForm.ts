import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { storage } from "@/lib";
import { RootState } from "@/modules";
import { checkFetch } from "@/modules/auth/userState";
import { RequestPayload } from "@/types/modules/auth/signUp";
import { initSignUpForm, signUpFetch } from "@/modules/auth/signUp";
import { initSignInForm, signInFetch } from "@/modules/auth/signIn";

export const useForm = (type: "signIn" | "signUp") => {
  const setItem = storage("setItem");
  const form = useMemo(
    () =>
      type === "signIn"
        ? {
            fetch: signInFetch,
            init: initSignInForm,
          }
        : {
            fetch: signUpFetch,
            init: initSignUpForm,
          },
    [type]
  );
  const { payload, error, loading, user } = useSelector((state: RootState) => ({
    payload: state.auth[type].payload,
    error: state.auth[type].error,
    loading: state.loading[`auth/${type}`],
    user: state.auth.user.payload,
  }));

  const dispatch = useDispatch();
  const nav = useNavigate();

  const fetch = (paylaod: RequestPayload) => {
    dispatch(form.fetch.request(paylaod));
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
      dispatch(checkFetch.request());
    }
  }, [payload, dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(form.init());
      nav("/", { replace: true });
      setItem("user", JSON.stringify(user));
    }
  }, [dispatch, setItem, form, user, nav]);

  return { loading, handleSubmit };
};
