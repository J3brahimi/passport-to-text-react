import { Box } from "@mui/material";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <Box>
      {/* <Navigation /> */}
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
