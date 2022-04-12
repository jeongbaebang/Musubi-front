import { createTheme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      primary: {
        main: string;
        light: string;
        dark: string;
        text: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      primary: {
        main: string;
        light: string;
        dark: string;
        text: string;
      };
    };
  }
}

export const themeOptions: ThemeOptions = {
  status: {
    primary: {
      main: "#f44336",
      light: "#F6685E",
      dark: "#AA2E25",
      text: "#FFFFFF",
    },
  },
};

export const theme = createTheme(themeOptions);
