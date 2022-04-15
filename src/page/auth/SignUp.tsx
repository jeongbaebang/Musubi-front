import Form from "@/components/auth/Form";
import { useForm } from "@/hooks/auth/useForm";

export function SignUp() {
  const { handleSubmit, loading, initForm } = useForm("signUp");
  return (
    <Form formType="signUp" loading={loading} initForm={initForm} handleSubmit={handleSubmit} />
  );
}
