import { useSetRecoilState } from "recoil";
import { Fragment, useState } from "react";

import { Menu } from "src/common/menu";
import { client } from "src/pages/api/config";
import { userInfo } from "src/recoil/atoms/user";
import { AccountCircle, IconButton } from "src/style";

export const Avatar = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const setUser = useSetRecoilState(userInfo);
  const handleCloseUserMenu = () => setAnchorElUser(null);
  const handleOpenUserMenu = (e: React.MouseEvent<HTMLElement>) => setAnchorElUser(e.currentTarget);

  const clickMenu = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    switch (e.currentTarget.id) {
      case "Profile":
        console.log("click Profile");
        break;
      case "SignOut":
        client.get("/api/auth/signout");
        setUser(() => ({
          token: "",
          username: "",
        }));
        break;
      default:
        return;
    }
  };

  const menuList = ["Profile", "SignOut"];

  return (
    <Fragment>
      <IconButton onClick={handleOpenUserMenu} size="medium" edge="end" color="inherit">
        <AccountCircle />
      </IconButton>
      <Menu
        anchorEl={anchorElUser}
        onClose={handleCloseUserMenu}
        onClick={clickMenu}
        menuList={menuList}
      />
    </Fragment>
  );
};
