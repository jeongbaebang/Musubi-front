/* eslint-disable @typescript-eslint/no-explicit-any */
import { warningAlert } from "@/common/Alert";

/**
 * 해당 모듈 폐기 (사용금지)
 * 다른 라이브러리 사용예정
 */
const validationMessage = {
  ER: {
    message: "올바른 이메일 주소가 아닙니다.",
  },
  LE: {
    message: "비밀번호는 최소 8자 이상으로 입력해 주세요.",
  },
  LM: {
    message: "최대 길이는 50글자 미만입니다.",
  },
  EE: {
    message: "이메일 필드가 비어있습니다.",
  },
  EP: {
    message: "비밀번호 필드가 비어있습니다.",
  },
  EPC: {
    message: "비밀번호 확인 필드가 비어있습니다.",
  },
  EC: {
    message: "두개의 비밀번호가 일치하지 않습니다.",
  },
  SC: {
    message: "두개의 비밀번호가 일치합니다.",
  },
};

const emailRegExp =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
type MessageCode = "ER" | "LE" | "LM" | "EE" | "EP" | "EPC" | "EC" | "SC";

export const validation = (
  inputState: {
    email: string;
    password: string;
    passwordComfirm?: string | undefined;
  },
  setErrorState: any,
  setOk: any,
  type: "signIn" | "signUp"
) => {
  const errorState = {
    email: false,
    password: false,
    passwordComfirm: false,
  };

  let isValidation = false;

  const check = (statment: boolean, messageCode: MessageCode, error: any) => {
    if (!isValidation && statment) {
      isValidation = true;
      if (type === "signUp" && messageCode === "SC") {
        setOk(true);
        return;
      }
      setErrorState(error);
      warningAlert([validationMessage[messageCode].message]);
    }
  };

  const signInValidation = ({
    email,
    password,
  }: {
    email: string;
    password: string;
    passwordComfirm?: string | undefined;
  }) => {
    check(email.length === 0, "EE", {
      ...errorState,
      email: true,
    });

    check(!new RegExp(emailRegExp).test(email), "ER", {
      ...errorState,
      email: true,
    });

    check(password.length === 0, "EP", {
      ...errorState,
      password: true,
    });

    check(password.length <= 8, "LE", {
      ...errorState,
      password: true,
    });

    check(password.length > 50, "LM", {
      ...errorState,
      password: true,
    });
  };

  const signUpValidation = ({
    email,
    password,
    passwordComfirm,
  }: {
    email: string;
    password: string;
    passwordComfirm?: string | undefined;
  }) => {
    check(email.length === 0, "EE", {
      ...errorState,
      email: true,
    });

    check(!new RegExp(emailRegExp).test(email), "ER", {
      ...errorState,
      email: true,
    });

    check(password.length === 0, "EP", {
      ...errorState,
      password: true,
    });

    check(passwordComfirm?.length === 0, "EPC", {
      ...errorState,
      passwordComfirm: true,
    });

    check(password.length <= 8, "LE", {
      ...errorState,
      password: true,
    });

    check(password.length > 50, "LM", {
      ...errorState,
      password: true,
    });

    check(password !== passwordComfirm, "EC", {
      ...errorState,
      password: true,
      passwordComfirm: true,
    });

    check(password === passwordComfirm, "SC", {
      ...errorState,
      password: false,
      passwordComfirm: false,
    });
  };
  return type === "signIn" ? signInValidation(inputState) : signUpValidation(inputState);
};
