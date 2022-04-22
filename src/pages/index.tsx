import type { NextPage } from "next";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Home: NextPage = () => {
  return (
    <Typography gutterBottom variant="h5" component="h2">
      <Button> Hello Next.js!</Button>
    </Typography>
  );
};

export default Home;
