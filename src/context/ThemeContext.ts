import { createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { Theme } from "../models/theme_mode";

const initTheme: Theme | null = null;

export const ThemeContext = createContext<Theme | null>(initTheme);


export function useThemeContext(): Theme {
    const [theme, setCurrentTheme] = useLocalStorageState<"dark" | "light">("light", "theme");

    const toggleTheme = () => {
        const curTheme = theme === "light" ? "dark" : "light"
        setCurrentTheme(curTheme);
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