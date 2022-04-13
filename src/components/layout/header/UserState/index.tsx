import { Box } from "@mui/material";

import { Avatar } from "./Avatar";
import { Message } from "./Message";

export const UserState = () => {
  const num = 1;
  return (
    <Box sx={{ display: "flex" }}>
      <Message num={num} />
      <Avatar />
    </Box>
  );
};
