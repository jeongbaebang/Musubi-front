export interface SuccessPayload {
  username: string;
}

export interface FailurePayload {
  error: string[];
}

export interface UserState {
  payload: SuccessPayload | null;
  error: FailurePayload | null;
}
