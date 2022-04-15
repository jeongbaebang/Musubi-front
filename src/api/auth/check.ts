import { client } from "@/api/config";
import { RequestPayload, ResponsePayload } from "@/types/api/auth/check";

export const check = () => client.get<RequestPayload, ResponsePayload>("/auth/check");
