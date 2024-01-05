import React, {useEffect} from "react";
import Taskbar from "../components/taskbar";
import Footer from "../components/footer";

export default function ProjectThree(){
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    return(
        <div>
            <Taskbar/>
            <div className="bg-[#E7D3AB] px-16 min-h-screen font-satoshi text-4xl flex justify-center items-center">
                This is where the Project_Three page will be.
            </div>
            <Footer/>
        </div>
    )
}