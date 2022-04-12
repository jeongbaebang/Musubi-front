import { TextField } from "@mui/material";

interface InputPorps {
  autoFocus?: boolean;
  id?: string;
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
      fullWidth
      autoComplete={autoComplete}
    />
  );
};

export const SignInInputs = () => {
  return (
    <>
      <CustomAuthInput autoFocus type="email" label="이메일 주소" autoComplete="email" />
      <CustomAuthInput
        id="password"
        type="password"
        label="비밀번호"
        autoComplete="current-password"
      />
    </>
  );
};

export const SignUpInputs = () => {
  return (
    <>
      <CustomAuthInput autoFocus type="email" label="이메일 주소" autoComplete="email" />
      <CustomAuthInput type="password" label="비밀번호" autoComplete="new-password" />
      <CustomAuthInput
        id="password-comfirm"
        type="password"
        label="비밀번호"
        autoComplete="new-password"
      />
    </>
  );
};
