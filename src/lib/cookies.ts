import { setCookie, parseCookies, destroyCookie } from "nookies";

export const setAuthCookie = (ctx: any, token: string) => {
  setCookie(ctx, "Authentication", token, {
    //TODO: 배포시 .env 파일에 보관할것
    maxAge: 86400000, // 1d
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
};

export const getAuthCookie = (ctx: any) => {
  const { Authentication } = parseCookies(ctx);
  return Authentication;
};

export const destroyAuthCookie = (ctx: any) => {
  destroyCookie(ctx, "Authentication", {
    maxAge: 86400000, // 1d
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
};
