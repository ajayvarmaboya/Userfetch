import { createContext,useState,useEffect } from "react";
export const ThemeContext=createContext();
export function ThemeProivder({children}){
    const[theme,setTheme]=useState(()=>{
        return localStorage.getItem("theme")||"dark";
    })

    useEffect(()=>{
        localStorage.setItem("theme",theme);
    },[theme])

    function toggleTheme(){
        setTheme(prev=>(prev === "dark" ? "light":"dark"));
    }

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );

}