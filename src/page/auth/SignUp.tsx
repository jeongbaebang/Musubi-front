import Form from "@/components/auth/Form";
import { useForm } from "@/hooks/auth/useForm";

export function SignUp() {
  const { handleSubmit, loading } = useForm("signUp");
  return <Form formType="signUp" handleSubmit={handleSubmit} loading={loading} />;
}
