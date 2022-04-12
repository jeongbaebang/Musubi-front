import { Box } from "@mui/material";

import { Message } from "./Message";
import { Avatar } from "./Avatar";
export const UserState = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Message />
      <Avatar />
    </Box>
  );
};
