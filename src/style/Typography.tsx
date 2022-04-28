import Typography, { TypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const ThemeTypography = styled(Typography)<TypographyProps>(({ theme }) => ({}));

const StyledTypography = <T extends TypographyProps>(props: T) => {
  return <ThemeTypography {...props}>{props.children}</ThemeTypography>;
};

export { StyledTypography as Typography };
