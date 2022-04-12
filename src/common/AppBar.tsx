import { AppBar, AppBarProps, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

const ThemeAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: theme.status.primary.main,
}));

export const CustomAppBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeAppBar position="static">
      <Toolbar>{children}</Toolbar>
    </ThemeAppBar>
  );
};
