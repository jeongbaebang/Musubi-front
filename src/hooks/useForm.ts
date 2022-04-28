import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import { isLoggedIn } from "./useUserCheck";
import { client } from "src/pages/api/config";
import { userInfo } from "src/recoil/atoms/user";
import { RequestPayload, ResponsePayload } from "./../pages/api/auth/signin";

export const useForm = (type: "signin" | "signup") => {
  const [user, setUser] = useRecoilState(userInfo);
  const [loading, setloading] = useState(false);

  const router = useRouter();

  const fetch = useCallback(
    (paylaod: RequestPayload) => {
      return client.post<RequestPayload, ResponsePayload>(`/api/auth/${type}`, paylaod);
    },
    [type]
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);

      setloading(true);
      const { data } = await fetch({
        username: form.get("email") as string,
        password: form.get("password") as string,
      });

      if (isLoggedIn(data)) {
        setUser(() => ({
          username: data.username,
          token: data.token,
        }));
      }
      setloading(false);
    },
    [fetch, setUser]
  );

  useEffect(() => {
    if (isLoggedIn(user)) {
      client.post("/api/auth/createAuthCookie", { token: user.token });
      router.replace("/");
    }
  }, [user, router]);

  return { handleSubmit, loading };
};
