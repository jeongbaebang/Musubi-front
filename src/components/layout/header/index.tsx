import { Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/material";

import { Logo } from "./Logo";
import { CustomAppBar as AppBar, CustomButton as Button } from "@/common";
import { UserState } from "./UserState";

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Logo />
        <UserState />
        <Button component={RouterLink} to="/signin" variant="text">
          SIGN IN
        </Button>
      </AppBar>
    </Box>
  );
};
