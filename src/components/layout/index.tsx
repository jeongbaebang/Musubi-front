import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

import { Header } from "./header";

export const Layout = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl" component={"main"}>
        <Outlet />
      </Container>
    </>
  );
};
