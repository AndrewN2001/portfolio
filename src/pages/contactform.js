import React, {useEffect} from "react";
import Taskbar from "../components/taskbar";
import Footer from "../components/footer";

export default function ContactForm(){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div>
            <Taskbar/>
            <div className="bg-[#E7D3AB] px-16 min-h-screen font-satoshi text-4xl flex justify-center items-center">
                This is where the Contact page will be.
            </div>
            <Footer/>
        </div>
    )
}