import { TextField } from "@mui/material";

interface InputPorps {
  fullWidth?: boolean;
  autoFocus?: boolean;
  id: string;
  type: "email" | "password";
  label: "이메일 주소" | "비밀번호" | "비밀번호 확인";
  autoComplete: "email" | "new-password" | "current-password";
}

const CustomAuthInput: React.FC<InputPorps> = props => {
  const { type, label, autoComplete } = props;
  return (
    <TextField
      {...props}
      margin="normal"
      name={type}
      type={type}
      label={label}
      autoComplete={autoComplete}
    />
  );
};

const EmailField = () => {
  return (
    <CustomAuthInput
      autoFocus
      fullWidth
      id="email"
      type="email"
      label="이메일 주소"
      autoComplete="email"
    />
  );
};

const PassWordField = () => {
  return (
    <CustomAuthInput
      fullWidth
      id="password"
      type="password"
      label="비밀번호"
      autoComplete="current-password"
    />
  );
};

const PassWordConfirmField = () => {
  return (
    <CustomAuthInput
      fullWidth
      id="password-comfirm"
      type="password"
      label="비밀번호 확인"
      autoComplete="new-password"
    />
  );
};

export const SignInInputs = () => {
  return (
    <>
      <EmailField />
      <PassWordField />
    </>
  );
};

export const SignUpInputs = () => {
  return (
    <>
      <EmailField />
      <PassWordField />
      <PassWordConfirmField />
    </>
  );
};
