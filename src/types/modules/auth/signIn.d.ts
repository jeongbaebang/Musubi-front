export interface RequestPayload {
  username: string;
  password: string;
}

export interface SuccessPayload {
  message: string[];
  user: string;
}

export interface FailurePayload {
  error: string[];
}

export interface SignInState {
  payload: SuccessPayload | null;
  error: FailurePayload | null;
}
