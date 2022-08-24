import { Fragment, ReactNode } from "react";

import { Box } from "src/style";
import Footer from "./Footer";
import Header from "./Header";

//rfac
const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Fragment>
      <Box component="header">
        <Header />
      </Box>
      <Box sx={{ minHeight: "100vh" }} component="main">
        {children}
      </Box>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: theme =>
            theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800],
        }}
      >
        <Footer />
      </Box>
    </Fragment>
  );
};

export default Layout;
