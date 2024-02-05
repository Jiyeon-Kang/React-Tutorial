import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import Library from "./chapter_03/Library.jsx";
import Clock from "./chapter_04/Clock.jsx";

const root=ReactDOM.createRoot(document.getElementById('root'));
    setInterval(()=>{
            root.render(
                <React.StrictMode>
                    <Clock />
                </React.StrictMode>
            );
        }, 1000);
