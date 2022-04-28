import { Typography } from "src/style";

import { Menu, MenuItem } from "src/style/Menu";

interface CustomMenuProps {
  menuList: string[];
  onClose: () => void;
  anchorEl: HTMLElement | null;
  onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

const CustomMenu: React.FC<CustomMenuProps> = ({ onClose, anchorEl, menuList, onClick }) => {
  const ID = "menu-appbar";
  return (
    <Menu
      id={ID}
      aria-label={ID}
      onClose={onClose}
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      sx={{ mt: "45px" }}
      keepMounted
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {menuList.map(list => (
        <MenuItem key={list} id={list} onClick={onClick}>
          <Typography textAlign="center">{list}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

export { CustomMenu as Menu };
