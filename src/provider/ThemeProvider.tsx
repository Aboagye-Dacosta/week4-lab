import { PropsWithChildren } from "react";
import { ThemeContext, useThemeContext } from "../context/ThemeContext";

export default function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <ThemeContext.Provider value={useThemeContext()}>
      {children}
    </ThemeContext.Provider>
  );
}
