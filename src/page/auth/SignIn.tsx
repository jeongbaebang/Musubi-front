import Form from "@/components/auth/Form";
import { useForm } from "@/hooks/auth/useForm";

export function SignIn() {
  const { loading, handleSubmit } = useForm("signIn");
  return <Form formType="signIn" handleSubmit={handleSubmit} loading={loading} />;
}
