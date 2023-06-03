import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "'Vazir'",
    allVariants: {
      fontFamily: "'Vazir'",
      lineHeight: "120%",
      letterSpacing: "-0.03em",
      fontStyle: "normal",
    },
    desktopH1: {
      fontFamily: "'Vazir'",
      fontWeight: "700",
      fontSize: "2.5rem",
      lineHeight: "120%",
    },
    desktopH2: {
      fontFamily: "'Vazir'",
      fontWeight: "500",
      fontSize: "2rem",
      lineHeight: "120%",
    },
    desktopBody1: {
      fontFamily: "'Vazir'",
      fontWeight: "400",
      fontSize: "1.2rem",
      lineHeight: "140%",
    },
  },
  palette: {
    primary: {
      main: "#263238",
      contrastText: "#fafafa",
    },
    secondary: {
      main: "#19857b",
    },
    success: {
      main: "#263238", // custom button color (seafoam green)
      contrastText: "#263238", // custom button text (white)
    },
    error: {
      main: "#263238", // custom button color (red)
    },
    background: {
      default: "#FAFAFA",
    },
    text: {
      primary: "#263238",
    },
  },
});

export default theme;
