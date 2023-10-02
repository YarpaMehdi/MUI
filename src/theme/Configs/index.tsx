"use client";
import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export let getDesignTokens = (mode: PaletteMode) => {
  let theme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: {
              main: "#8C2531",
              dark: "#163B3C",
              light: "#DCECDB",
            },
            secondary: {
              main: "#68151E",
              light: "#F4F4F4",
              dark: "#BFBFBF",
            },
            text: {
              primary: "#404040",
              secondary: "#7F7F7F",
            },
            background: {
              default: "#F8F8F8",
            },
            error: {
              main: "#ef5350",
              dark: "#FF4133",
            },
            success: {
              main: "#4CAF50",
            },
          }
        : {
            // palette values for dark mode
            primary: {
              main: "#163B3C",
              dark: "#404040",
              light: "#3FCB6B",
            },
            secondary: {
              main: "#68151E",
              light: "#F4F4F4",
              dark: "#BFBFBF",
            },
            text: {
              primary: "#404040",
              secondary: "#7F7F7F",
            },
            background: {
              default: "#F4F4F4",
            },
            error: {
              main: "#ef5350",
              dark: "#FF4133",
            },
            success: {
              main: "#4CAF50",
            },
          }),
    },
  });
  theme = createTheme(theme, {});
  return theme;
};
