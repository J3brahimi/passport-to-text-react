import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import Image from "next/image";

const Navigation = () => {
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.down("md"));
  
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      p={4}
      component="a"
      href="/"
      sx={{
        textDecoration: "none",
        color: "#000",
      }}
    >
      <Box sx={{ display: { md: "flex" } }}>
        <Image
          src="/images/logo.png"
          width={breakpoint ? 36 : 48}
          height={breakpoint ? 36 : 48}
          alt="odin logo"
        />
      </Box>

      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          display: { md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Logo
      </Typography>
    </Box>
  );
};

export default Navigation;
