import { Typography } from "@mui/material";

export const Logo = () => {
  const LOGO = "MUSUBI";
  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      {LOGO}
    </Typography>
  );
};
