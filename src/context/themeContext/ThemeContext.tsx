import React, { createContext, useReducer } from "react";
import { ThemeState, themeReducer, lightTheme } from './themeReducer';

interface ThemeContextProps {
    theme:         ThemeState;
    setDarkTheme:  () => void;
    setlightTheme: () => void;
}


export const ThemeContext = createContext({} as ThemeContextProps );

export const ThemePriveder = ({ children }: any ) => {

    const [theme, dispatch] = useReducer(themeReducer, lightTheme); 


    const setDarkTheme = () => {
        dispatch({ type:'set_dark_theme' })        
    };
    
    const setlightTheme = () => {
        dispatch({ type:'set_light_theme' })
    };


    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setlightTheme,
        }}>
            { children }
        </ThemeContext.Provider>
    )
}