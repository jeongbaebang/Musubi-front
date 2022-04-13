export interface RequestPayload {
  username: string;
  password: string;
}

export interface ResponsePayload {
  data: { message: string[]; user: string };
}
