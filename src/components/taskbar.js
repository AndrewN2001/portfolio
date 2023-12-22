import React from "react";
import { Link } from "react-router-dom";

export default function Taskbar(){
    return(
        <div>
            <div className="fixed z-20 font-satoshi p-5 my-5 mx-16 rounded-md shadow-2xl bg-[#333335]/80 backdrop-blur-sm">
                <span className="text-[#EEE0C3]">Andrew Nguyen</span>
            </div>

            <div className="fixed z-10 flex gap-5 text-[#EEE0C3] font-satoshi right-0 p-5 my-5 mx-16 rounded-md shadow-2xl bg-[#333335]/80 backdrop-blur-sm">
                <Link to="/" className="">Home</Link>
                <Link to='/experience'>Experience</Link>
                <Link to="/contact">Contact</Link>
                <a href="/December2023_Resume.pdf" target="_blank" download>Resume</a>
            </div>
        </div>
    )
}