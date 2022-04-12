import { Menu, MenuProps, MenuItem, Typography } from "@mui/material";

interface RenderMenuProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  handleClick: () => void;
  menuList: string[];
}

const CustomMenu: React.FC<MenuProps> = props => {
  return (
    <Menu
      {...props}
      sx={{ mt: "45px" }}
      id="menu-appbar"
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {props.children}
    </Menu>
  );
};

export const RenderMenu: React.FC<RenderMenuProps> = ({
  anchorEl,
  onClose,
  handleClick,
  menuList,
}) => {
  return (
    <CustomMenu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
      {menuList.map(list => (
        <MenuItem key={list} id={list} onClick={handleClick}>
          <Typography textAlign="center">{list}</Typography>
        </MenuItem>
      ))}
    </CustomMenu>
  );
};
