import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem, { MenuItemProps } from "@mui/material/MenuItem";

import { styled } from "@mui/material/styles";

const ThemeMenu = styled(Menu)<MenuProps>(({ theme }) => ({}));
const StyledMenu = <T extends MenuProps>(props: T) => {
  return <ThemeMenu {...props}>{props.children}</ThemeMenu>;
};

const ThemeMenuItem = styled(MenuItem)<MenuItemProps>(({ theme }) => ({}));
const StyledMenuItem = <T extends MenuItemProps>(props: T) => {
  return <ThemeMenuItem {...props}>{props.children}</ThemeMenuItem>;
};

export { StyledMenu as Menu, StyledMenuItem as MenuItem };
