import Link from "src/lib/Link";
import { useForm } from "src/hooks/useForm";
import { LoadingButton, SubmitButton } from "src/common/button";
import { SignInTextField, SignUpTextField } from "src/common/textField";
import { Avatar, Box, Container, Grid, LockOutlinedIcon, Typography } from "src/style";

export interface FormProps {
  formType: "signin" | "signup";
}

const Form: React.FC<FormProps> = ({ formType }) => {
  const form = {
    signin: {
      title: "Sign in",
      text: "계정이 없으신가요? 회원가입",
      link: "/auth/signup",
    },
    signup: {
      title: "Sign up",
      text: "계정이 있으신가요? 로그인",
      link: "/auth/signin",
    },
  } as const;

  const sx = {
    box: {
      marginTop: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: { m: 1, bgcolor: "#f44336" },
    formBox: { mt: 1 },
    field: { height: "240px" },
    button: { mt: 3, mb: 2 },
  } as const;

  const { title, text, link } = form[formType];
  const { handleSubmit, loading } = useForm(formType);

  return (
    <Container maxWidth="xs">
      <Box sx={sx.box}>
        <Avatar sx={sx.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" aria-label={title}>
          {title}
        </Typography>
        <Box noValidate component="form" sx={sx.formBox} onSubmit={handleSubmit}>
          {formType === "signin" ? (
            <Box sx={sx.field}>
              <SignInTextField />
            </Box>
          ) : (
            <SignUpTextField />
          )}
          {loading ? (
            <LoadingButton sx={sx.button} fullWidth variant="contained">
              {title}
            </LoadingButton>
          ) : (
            <SubmitButton sx={sx.button} fullWidth variant="contained">
              {title}
            </SubmitButton>
          )}
          <Grid container>
            <Grid item xs />
            <Grid item>
              <Link
                variant="body2"
                href={{
                  pathname: link,
                }}
              >
                {text}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Form;
