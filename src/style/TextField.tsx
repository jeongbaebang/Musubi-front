import TextField, { TextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const ThemeTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  "& label.Mui-focused": {
    color: theme.status.primary.main,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.status.primary.main,
  },
  "& .MuiOutlinedInput-root": {
    // "& fieldset": {
    //   borderColor: theme.status.primary.main,
    // },
    // "&:hover fieldset": {
    //   borderColor: theme.status.primary.main,
    // },
    "&.Mui-focused fieldset": {
      borderColor: theme.status.primary.main,
    },
  },
}));

const StyledTextField = <T extends TextFieldProps>(props: T) => {
  return <ThemeTextField {...props}>{props.children}</ThemeTextField>;
};

export { StyledTextField as TextField };
