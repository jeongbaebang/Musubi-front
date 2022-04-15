interface ErrorStatus {
  email: boolean;
  password: boolean;
  passwordComfirm?: boolean;
}

interface InputState {
  email: string;
  password: string;
  passwordComfirm?: string;
}
export interface FormProps {
  loading: boolean;
  initForm: () => void;
  formType: "signIn" | "signUp";
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}
