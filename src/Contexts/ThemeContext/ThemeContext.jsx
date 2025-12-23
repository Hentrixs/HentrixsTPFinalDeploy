import { createContext } from "react";
import { useState } from "react";
import MainLayout from "../../Layouts/MainLayout";

export const ThemeContext = createContext();

export const ThemeContextProvider = () => {
    const [lightTheme, setLightTheme] = useState(true)

    return (
        <ThemeContext.Provider value={{ lightTheme, setLightTheme }}>
            <MainLayout />
        </ThemeContext.Provider>
    )
}