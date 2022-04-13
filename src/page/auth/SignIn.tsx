import Form from "@/components/auth/Form";

import { useSignIn } from "@/hooks/auth/useSignIn";

export function SignIn() {
  const { loading, handleSubmit } = useSignIn();
  return <Form formType="signIn" handleSubmit={handleSubmit} loading={loading} />;
}
