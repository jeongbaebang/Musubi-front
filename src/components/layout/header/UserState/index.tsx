import { Box } from "@mui/material";

import { Message } from "./Message";
import { Avatar } from "./Avatar";
export const UserState = () => {
  const num = 1;
  return (
    <Box sx={{ display: "flex" }}>
      <Message num={num} />
      <Avatar />
    </Box>
  );
};
