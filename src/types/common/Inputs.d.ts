export interface InputProps {
  autoFocus?: boolean;
  type: "email" | "password";
  id: "email" | "password" | "passwordComfirm";
  label: "이메일 주소" | "비밀번호" | "비밀번호 확인";
  autoComplete: "email" | "new-password" | "current-password";
}
