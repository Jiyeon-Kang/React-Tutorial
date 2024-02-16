import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Library from "./chapter_03/Library.jsx";
// import Clock from "./chapter_04/Clock.jsx";
// import CommentList from "./Chapter_05/CommentList.jsx";
// import NotificationList from "./chapter_06/NotificationList.jsx";
// import Accommodate from "./chapter_07/Accommodate.jsx";
// import ConfirmButton from "./chapter_08/ConfirmButtons.jsx";
// import LandingPage from "./chapter_09/LandingPage.jsx";
import AttendeanceBook from "./chapter_10/AttendeanceBook.jsx";

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AttendeanceBook />
    </React.StrictMode>
);
