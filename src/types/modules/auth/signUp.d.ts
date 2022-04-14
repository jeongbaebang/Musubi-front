export interface RequestPayload {
  username: string;
  password: string;
}

export interface SuccessPayload {
  message: string[];
  user: string;
}

export interface SignUpState {
  payload: SuccessPayload | null;
  error: string[] | null;
}
