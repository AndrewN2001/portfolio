import React from "react";
import { Link } from "react-router-dom";

export default function Taskbar(){
    return(
        <div className="flex">
            <div id="name" className="invisible md:visible fixed z-20 font-satoshi p-5 mt-5 ml-16 md:top-0 md:left-0 rounded-md shadow-2xl bg-[#333335]/80 backdrop-blur-sm">
                <span className="text-[#EEE0C3]">Andrew Nguyen</span>
            </div>

            <div id="info" className="md:visible invisible z-20 fixed right-0 top-0 flex mt-5 md:mr-16 ml-auto mr-auto gap-5 w-min h-min text-[#EEE0C3] font-satoshi p-5 rounded-md shadow-2xl bg-[#333335]/80 backdrop-blur-sm">
                <Link to="/portfolio">Home</Link>
                <Link to='/experience'>Experience</Link>
                <Link to="/contact">Contact</Link>
                <a href="/December2023_Resume.pdf" target="_blank" download>Resume</a>
            </div>

            <div id="info" className="visible md:invisible z-20 fixed inset-x-0 bottom-0 ml-auto mr-auto mb-5 flex gap-5 w-min h-min text-[#EEE0C3] font-satoshi p-5 rounded-md shadow-2xl bg-[#333335]/80 backdrop-blur-sm">
                <Link to="/portfolio">Home</Link>
                <Link to='/experience'>Experience</Link>
                <Link to="/contact">Contact</Link>
                <a href="/December2023_Resume.pdf" target="_blank" download>Resume</a>
            </div>
        </div>
    )
}