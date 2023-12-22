import React from "react";
import Taskbar from "../components/taskbar";
import Footer from "../components/footer";

export default function ProjectFour(){
    return(
        <div>
            <Taskbar/>
            <div className="bg-[#E7D3AB] px-16 min-h-screen font-satoshi text-4xl flex justify-center items-center">
                This is where the Project_Four page will be.
            </div>
            <Footer/>
        </div>
    )
}