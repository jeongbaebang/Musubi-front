import { client } from "@/api/config";
import { RequestPayload, ResponsePayload } from "@/types/api/auth/signIn";

export const signIn = (payload: RequestPayload) =>
  client.post<RequestPayload, ResponsePayload>("/auth/signin", payload);
