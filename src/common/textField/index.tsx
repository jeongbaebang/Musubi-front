import { Fragment } from "react";
import { TextField } from "src/style";

const CustomAuthTextField: React.FC<any> = props => {
  const { type, label, autoComplete } = props;
  return (
    <TextField
      fullWidth
      name={type}
      type={type}
      label={label}
      margin="normal"
      autoComplete={autoComplete}
    />
  );
};

const SignInTextField = () => {
  return (
    <Fragment>
      <CustomAuthTextField
        autoFocus
        id="email"
        type="email"
        label="이메일 주소"
        autoComplete="email"
      />
      <CustomAuthTextField
        id="password"
        type="password"
        label="비밀번호"
        autoComplete="current-password"
      />
    </Fragment>
  );
};

const SignUpTextField = () => {
  return (
    <Fragment>
      <CustomAuthTextField
        autoFocus
        id="email"
        type="email"
        label="이메일 주소"
        autoComplete="email"
      />
      <CustomAuthTextField
        id="password"
        type="password"
        label="비밀번호"
        autoComplete="new-password"
      />
      <CustomAuthTextField
        type="password"
        label="비밀번호 확인"
        id="passwordComfirm"
        autoComplete="new-password"
      />
    </Fragment>
  );
};

export { SignInTextField, SignUpTextField };
