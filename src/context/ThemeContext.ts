import { createContext, useContext, useState } from "react";
import { Theme } from "../models/theme_mode";

const initTheme: Theme | null = null;

export const ThemeContext = createContext<Theme | null>(initTheme);


export function useThemeContext(): Theme {
    const [theme, setTheme] = useState<"dark" | "light">("light");

    const toggleTheme = () => {
        setTheme((curTheme) => curTheme === "light" ? "dark" : "light");
    }

    return {
        theme,
        toggleTheme,
    }
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) throw new Error("You are trying to use theme context outside of theme provider");
    return context;
}