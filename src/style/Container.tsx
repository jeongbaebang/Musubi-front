import Container, { ContainerProps } from "@mui/material/Container";
import { styled } from "@mui/material/styles";

const ThemeContainer = styled(Container)<ContainerProps>(({ theme }) => ({}));

const StyledContainer = <T extends ContainerProps>(props: T) => {
  return <ThemeContainer {...props}>{props.children}</ThemeContainer>;
};

export { StyledContainer as Container };
