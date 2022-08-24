import Toolbar, { ToolbarProps } from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";

const ThemeToolbar = styled(Toolbar)<ToolbarProps>(({ theme }) => ({}));

const StyledToolbar = <T extends ToolbarProps>(props: T) => {
  return (
    <ThemeToolbar {...props} sx={{ borderBottom: 1, borderColor: "#f44336" }}>
      {props.children}
    </ThemeToolbar>
  );
};

export { StyledToolbar as Toolbar };
