import React from "react";
import "./MainPage.css";
import "../fonts/Chirp-Regular.ttf";
import Sidebar from "./Sidebar";
import Feed from './Feed';
import Widgets from "./Widgets";

function MainPage() {
  return (
    <div className="mainPage">

      <Sidebar />

      <Feed />

      <Widgets />
      
    </div>
  );
}

export default MainPage;
