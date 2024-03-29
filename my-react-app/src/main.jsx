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
// import AttendeanceBook from "./chapter_10/AttendeanceBook.jsx";
// import SignUp from "./chapter_11/SignUp.jsx";
// import Calculator from "./chapter_12/Calculator.jsx";
// import ProfileCard from "./chapter_13/ProfileCard.jsx";
// import DarkOrLight from './chapter_14/DarkOrLight';
import Blocks from './chapter_15/Blocks';

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Blocks/>
    </React.StrictMode>
);
