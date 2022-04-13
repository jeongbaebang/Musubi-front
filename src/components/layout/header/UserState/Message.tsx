import { Badge, IconButton } from "@mui/material";
import { Mail as MailIcon } from "@mui/icons-material";

export const Message: React.FC<{ num: number }> = ({ num }) => {
  return (
    <IconButton
      size="large"
      aria-label={`show ${num} new message`}
      color="inherit"
      onClick={() => {}}
    >
      <Badge badgeContent={num} color="error">
        <MailIcon />
      </Badge>
    </IconButton>
  );
};
