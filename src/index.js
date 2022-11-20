import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './AppContext';
import StoreFront from "./StoreFront";
import { Navbar } from "./Navbar.js";
import {AppContext} from "./AppContext.js";
import React,{useContext} from "react"

const API = fetch("https://firestore.googleapis.com/v1/projects/supermarket-6a8cb/databases/(default)/documents/products")

function App() {
  const app = useContext(AppContext)
  return <div className={app.theme==="dark" ? "dark":""}>
    <Navbar />
    <StoreFront />
    </div>
}

const AppWrapper = ()=> {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
