import { TextField } from "@mui/material";

import { InputProps } from "@/types/common";

const CustomAuthInput: React.FC<InputProps> = props => {
  const { type, label, autoComplete } = props;
  return (
    <TextField
      {...props}
      fullWidth
      name={type}
      type={type}
      label={label}
      margin="normal"
      autoComplete={autoComplete}
    />
  );
};

export const SignInInputs = () => {
  return (
    <>
      <CustomAuthInput autoFocus id="email" type="email" label="이메일 주소" autoComplete="email" />
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
      <CustomAuthInput autoFocus id="email" type="email" label="이메일 주소" autoComplete="email" />
      <CustomAuthInput id="password" type="password" label="비밀번호" autoComplete="new-password" />
      <CustomAuthInput
        type="password"
        label="비밀번호 확인"
        id="passwordComfirm"
        autoComplete="new-password"
      />
    </>
  );
};
