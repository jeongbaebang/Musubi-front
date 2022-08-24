import Grid, { GridProps } from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const ThemeGrid = styled(Grid)<GridProps>(({ theme }) => ({}));

const StyledGrid = <T extends GridProps>(props: T) => {
  return <ThemeGrid {...props}>{props.children}</ThemeGrid>;
};

export { StyledGrid as Grid };
