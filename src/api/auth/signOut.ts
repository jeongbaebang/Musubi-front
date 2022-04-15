import { client } from "@/api/config";

export const singOut = () => client.post<undefined, undefined>("/auth/signout");
