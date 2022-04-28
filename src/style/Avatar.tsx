import Avatar, { AvatarProps } from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

const ThemeAvatar = styled(Avatar)<AvatarProps>(({ theme }) => ({}));

const StyledAvatar = <T extends AvatarProps>(props: T) => {
  return <ThemeAvatar {...props}>{props.children}</ThemeAvatar>;
};

export { StyledAvatar as Avatar };
