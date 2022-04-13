import { IconButton } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";

import { RenderMenu } from "@/common/Menu";

export const Avatar = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const menuList = ["Profile", "SignOut"];

  return (
    <>
      <IconButton onClick={handleOpenUserMenu} size="large" edge="end" color="inherit">
        <AccountCircle />
      </IconButton>
      <RenderMenu
        anchorEl={anchorElUser}
        onClose={handleCloseUserMenu}
        handleClick={() => {}}
        menuList={menuList}
      />
    </>
  );
};
