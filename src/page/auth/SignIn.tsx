import Form from "@/components/auth/Form";
import { useForm } from "@/hooks/auth/useForm";

export function SignIn() {
  const { loading, handleSubmit, initForm } = useForm("signIn");
  return (
    <Form formType="signIn" loading={loading} initForm={initForm} handleSubmit={handleSubmit} />
  );
}
