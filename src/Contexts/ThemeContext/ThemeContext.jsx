import { createContext } from "react";
export const ThemeContext = createContext();
import { useState } from "react";
import MainLayout from "../../Layouts/MainLayout";

export const ThemeContextProvider = () => {
    const [darkTheme, setDarkTheme] = useState(true)

    return (
        <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
            <MainLayout />
        </ThemeContext.Provider>
    )
}