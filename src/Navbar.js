import { useContext } from "react";
import { AppContext } from "./AppContext";

export const Navbar = () => {
    const app = useContext(AppContext) 
    const handleCurrencyChange = (event)=> {
        app.setCurrency(event.target.value)
    }
    return <>
    Select Currency <select onChange={handleCurrencyChange}>
    <option value="EUR">EUR</option>
    <option value="USD">USD</option>
    <option value="GBP">GBP</option>
    </select> 
    Current Theme = {app.theme} <button onClick={app.toggleTheme}>Toggle Theme</button>
    <hr />
    </>
}

