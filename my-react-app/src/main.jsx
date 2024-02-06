import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Library from "./chapter_03/Library.jsx";
// import Clock from "./chapter_04/Clock.jsx";
// import CommentList from "./Chapter_05/CommentList.jsx";
import NotificationList from "./chapter_06/NotificationList.jsx";

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <NotificationList />
    </React.StrictMode>
);
