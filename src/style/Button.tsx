import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Button, { ButtonProps } from "@mui/material/Button";

const ThemeTButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.status.primary.main,

  "&:hover": {
    backgroundColor: "#f443363d",
    borderColor: "#f4433685",
  },
  "&:active": {
    backgroundColor: "#f443363d",
    borderColor: "#f4433685",
  },

  "&.MuiButton-contained": {
    color: "#FFFFFF",
    background: "#f44336",
    "&:hover": {
      backgroundColor: "#ef2d1f",
    },
  },
}));

const StyledButton = <T extends ButtonProps>(props: T) => {
  return <ThemeTButton {...props}>{props.children}</ThemeTButton>;
};

export { StyledButton as Button, IconButton };
