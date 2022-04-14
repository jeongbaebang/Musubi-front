import { client } from "@/api/config";
import { RequestPayload, ResponsePayload } from "@/types/api/auth/signUp";

export const signUp = (payload: RequestPayload) =>
  client.post<RequestPayload, ResponsePayload>("/auth/signup", payload);
