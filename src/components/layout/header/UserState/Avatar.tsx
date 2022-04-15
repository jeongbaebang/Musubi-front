import { useState } from "react";
import { IconButton } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

import { RenderMenu } from "@/common/Menu";
import { useSignOut } from "@/hooks/auth/useSignOut";

export const Avatar = () => {
  const { signOut } = useSignOut();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const clickMenu = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    switch (e.currentTarget.id) {
      case "Profile":
        console.log("click Profile");
        break;
      case "SignOut":
        signOut();
        break;
      default:
        return;
    }
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
        onClick={clickMenu}
        menuList={menuList}
      />
    </>
  );
};
