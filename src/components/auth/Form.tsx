import { Link as RouterLink } from "react-router-dom";
import { LockOutlined as LockOutlinedIcon } from "@mui/icons-material";
import { Box, Link, Grid, Avatar, Container, Typography } from "@mui/material";

import {
  SignInInputs,
  SignUpInputs,
  CustomLoadingButton as LoadingButton,
  CustomSubmitButton as SubmitButton,
} from "@/common";
import { FormProps } from "@/types/components/auth/form";

const Form: React.FC<FormProps> = ({ formType, loading, handleSubmit }) => {
  const form = {
    signIn: {
      title: "Sign in",
      text: "계정이 없으신가요? 회원가입",
      link: "/signup",
    },
    signUp: {
      title: "Sign up",
      text: "계정이 있으신가요? 로그인",
      link: "/signin",
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

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={sx.box}>
        <Avatar sx={sx.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" aria-label={title}>
          {title}
        </Typography>
        <Box noValidate component="form" sx={sx.formBox} onSubmit={handleSubmit}>
          {formType === "signIn" ? (
            <Box sx={sx.field}>
              <SignInInputs />
            </Box>
          ) : (
            <SignUpInputs />
          )}
          {loading ? (
            <LoadingButton sx={sx.button}>{title}</LoadingButton>
          ) : (
            <SubmitButton sx={sx.button}>{title}</SubmitButton>
          )}
          <Grid container>
            <Grid item xs />
            <Grid item>
              <Link variant="body2" component={RouterLink} to={link}>
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
