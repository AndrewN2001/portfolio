import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="h-min w-full bg-[#333335] text-[#EEE0C3] gap-5 py-3 md:py-7 font-satoshi flex flex-col md:flex-row justify-between px-16 items-center text-lg md:text-xl">
            <h1 className="text-center">Andrew Nguyen 2023 | Design by <a href="https://johnnyle.io/" target="_blank" rel="noopener noreferrer">Johnny Le.</a></h1>
            <div className="md:visible invisible flex gap-5">
                <Link to='/experience' className="hover:underline hover:underline-offset-4">Experience</Link>
                <Link to='/contact' className="hover:underline hover:underline-offset-4">Contact</Link>
                <a href="/December2023_Resume.pdf" className="hover:underline hover:underline-offset-4" target="_blank" download>Resume</a>
            </div>
            <div className="md:visible invisible flex gap-4 text-3xl">
                <a href="https://github.com/AndrewN2001" target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/andrewnguyenta/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
                <a href="https://www.instagram.com/droosgallery/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram/>
                </a>
            </div>
        </div>
    )
}