import { Fragment, useEffect, useState } from "react";

import { Toolbar } from "src/style";
import { LinkButton } from "src/common/button";
import { useUserCheck } from "src/hooks/useUserCheck";
import { Logo, Message, Avatar } from "src/components/nav";

const UserState = () => {
  return (
    <Fragment>
      <Message num={1} />
      <Avatar />
    </Fragment>
  );
};

const Header = () => {
  const {
    user: { username },
  } = useUserCheck();

  return (
    <Toolbar>
      <Logo />
      {username ? <UserState /> : <LinkButton pathname="/auth/signin">Sign in</LinkButton>}
    </Toolbar>
  );
};

export default Header;
