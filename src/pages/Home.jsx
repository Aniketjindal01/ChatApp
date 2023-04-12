import React from "react";
import Chat from "../componenets/Chat";
import Sidebar from "../componenets/Sidebar";

function Home(){
    return (
        <div className="home">
          <div className="container">
            <Sidebar/>
            <Chat/>
          </div>
        </div>
    );
};

export default Home;