import { client } from "@/api/config";
import { RequestPayload, ResponsePayload } from "@/types/api/auth";

export const signIn = ({ username, password }: RequestPayload) =>
  client.post<RequestPayload, ResponsePayload>("/auth/signin", { username, password });
