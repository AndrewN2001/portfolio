import React from "react";
import { Link } from "react-router-dom";

export default function Taskbar(){
    return(
        <div className="flex justify-center">
            <div id="name" className="invisible md:visible fixed z-20 font-satoshi p-5 mt-5 ml-16 md:top-0 md:left-0 rounded-md shadow-2xl bg-[#333335]/80 backdrop-blur-sm">
                <span className="text-[#EEE0C3]">Andrew Nguyen</span>
            </div>

            <div id="info" className="md:right-0 md:top-0 sm:my-5 sm:mx-16 ml-auto mt-5 mr-auto fixed z-20 flex gap-5 w-min text-[#EEE0C3] font-satoshi p-5 rounded-md shadow-2xl bg-[#333335]/80 backdrop-blur-sm">
                <Link to="/portfolio_2">Home</Link>
                <Link to='/experience'>Experience</Link>
                <Link to="/contact">Contact</Link>
                <a href="/December2023_Resume.pdf" target="_blank" download>Resume</a>
            </div>
        </div>
    )
}