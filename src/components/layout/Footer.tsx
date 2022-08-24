import Link from "src/lib/Link";
import { Container, Typography } from "src/style";

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        MUSUBI
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Footer = () => {
  return (
    <Container maxWidth="sm">
      <Copyright />
    </Container>
  );
};

export default Footer;
