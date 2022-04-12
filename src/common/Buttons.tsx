import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { Save as SaveIcon } from "@mui/icons-material/";

const ThemeButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.status.primary.text,
  backgroundColor: theme.status.primary.main,

  "&:hover": {
    background: theme.status.primary.light,
  },
}));

export const CustomButton = <T extends ButtonProps>(props: T) => {
  return (
    <ThemeButton {...props} variant="contained">
      {props.children}
    </ThemeButton>
  );
};

export const CustomLoadingButton = <T extends LoadingButtonProps>(props: T) => {
  return (
    <LoadingButton
      {...props}
      loading
      fullWidth
      variant="contained"
      loadingPosition="start"
      startIcon={<SaveIcon />}
    >
      {props.children}
    </LoadingButton>
  );
};

export const CustomSubmitButton = <T extends ButtonProps>(props: T) => {
  return (
    <ThemeButton {...props} type="submit" fullWidth>
      {props.children}
    </ThemeButton>
  );
};
