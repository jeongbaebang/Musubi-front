export interface SuccessPayload {
  user: string;
}

export interface FailurePayload {
  error: string[];
}

export interface UserState {
  payload: SuccessPayload | null;
  error: FailurePayload | null;
}
