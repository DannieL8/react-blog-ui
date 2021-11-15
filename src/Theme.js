// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
// 2. Extend the theme to include custom colors, fonts, etc

export const theme = extendTheme({
  colors: {
    primary: "#4299E1",
    secondary: "#00B7EB",
    thirdColor: "#00D1DB",
    accent: "#1CE5B5",
  },
});

export default theme;
