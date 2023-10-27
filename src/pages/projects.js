import React from "react";
import Navbar from "../components/navbar";

const project = () =>{
    const val="active_btn";
    return(
        <div className="main-bg">
        <div className="control"><Navbar/></div>
        <div className="updated_soon flex-center">
            <p>Will be Updated Soon 😊</p>
        </div>
    </div>
    );
}

export default project;
