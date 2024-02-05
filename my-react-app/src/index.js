import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from'./reportWebVitals';
import './index.css'
import App from "./App.jsx";
import Clock from "./chapter_04/Clock.jsx";

SetInterval(()=>{
    // eslint-disable-next-line react/no-deprecated
    ReactDOM.render(
        <React.StrictMode>
            <Clock />
        </React.StrictMode>,
        document.getElementById('root')
    );
},1000);

reportWebVitals();