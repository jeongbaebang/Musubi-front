import { Typography } from "src/style";
import Link from "src/lib/Link";

export const Logo = () => {
  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      <Link
        sx={{ textDecorationLine: "none", color: "#f44336" }}
        href={{
          pathname: "/",
        }}
      >
        MUSUBI
      </Link>
    </Typography>
  );
};
