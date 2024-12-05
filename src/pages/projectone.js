import React, { useEffect } from "react";
import Taskbar from "../components/taskbar";
import Footer from "../components/footer";
import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom"
import Project1_Screenshot from '../Project1_Screenshot.png';

export default function ProjectOne(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div>
            <Taskbar/>
            <div className="bg-[#E7D3AB] text-[#333335] min-h-screen font-satoshi italic flex justify-center items-center">
                <div id="scroll" className="w-2/3 md:w-1/2 flex flex-col py-16">
                    <div id="project-title" className="text-7xl font-medium flex w-full flex-col gap-3">
                        <h1 className="text-4xl md:text-7xl">Project 1: Voluntify</h1>
                        <h2 className="border-b border-[#333335] bg-slate-300"></h2>
                        <h3 className="not-italic text-sm mb-4">Published December 4th, 2024</h3>
                    </div>

                    {/* <div id="image">
                        <img src={Project1_Screenshot} alt="just a placeholder lol" className="shadow-md"></img>
                        <div className="not-italic text-xs">you just got rick roll'ed</div>
                    </div> */}

                    <div id="project-info" className="text-3xl not-italic flex flex-col gap-3 mb-4 mt-10">
                        <div id="summary" className="pb-4">
                            <h1 className="pb-4">Summary</h1>
                            <h2 className="text-lg">
                                Voluntify is a full-stack web application designed to connect volunteers with community events. It enables users to track their participation history, discover upcoming events, and receive personalized recommendations based on their interests. Administrators can create and manage events through an intuitive interface. This project, developed as part of COSC 4353 (Software Design), aimed to foster community engagement and streamline volunteer coordination.
                            </h2>
                        </div>
                        <div id="Objective" className="pb-4">
                            <h1 className="pb-4">Objective</h1>
                            <h2 className="text-lg">
                                As team lead and developer, I guided a team of two in building Voluntify from the ground up. I contributed to designing and implementing RESTful APIs, managing the backend with MongoDB, and creating a responsive front-end using React and TailwindCSS. I also ensured the project adhered to Agile development practices, promoting iterative improvements and effective collaboration. My work focused on developing user authentication, event tracking, and personalized recommendation features.
                            </h2>
                        </div>
                        <div id="tech-stack" className="pb-4">
                            <h1 className="pb-4">Technologies Used</h1>
                            <h2 className="text-lg">
                                The platform was built using the MERN stack (MongoDB, Express.js, React, Node.js) and follows the Agile development methodology.
                            </h2>
                        </div>
                    </div>

                    <h1 className="w-full border-b border-[#333335] bg-slate-300"></h1>

                    <div id="next-project" className="w-full flex justify-end ">
                        <Link to="/project-two" className="bg-[#333335] text-[#E7D3AB] p-3 mt-3 flex items-center gap-2 place-content-end hover:bg-[#E7D3AB] border-2 border-[#333335] hover:text-[#333335]">
                            Project 2
                            <GrFormNextLink/>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}