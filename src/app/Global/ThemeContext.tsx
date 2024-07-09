"use client";
import { createContext, useContext } from "react";
type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
  message: string;
};
const defaultTheme: Theme = {
  colors: {
    primary: "#00788",
    secondary: "#49766",
  },
  message: "Hello World",
};
const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
