import { Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { Logo } from "./Logo";
import { UserState } from "./UserState";
import { CustomAppBar as AppBar, CustomButton as Button } from "@/common";

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
