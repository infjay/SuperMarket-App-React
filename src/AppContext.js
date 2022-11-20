import { useState , createContext } from "react";

const AppContext = createContext()

const AppProvider = (props)=> {
    const [theme, setTheme] = useState("dark")
    const [currency, setCurrency] = useState("EUR")

    const toggleTheme = ()=> {
        if(theme==="dark"){
            setTheme("light")
        } else {
            setTheme("dark")
        }
    }
    const value = {
        theme,
        toggleTheme,
        currency,
        setCurrency
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext , AppProvider}