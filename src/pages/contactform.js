import React, {useEffect, useState} from "react";
import Taskbar from "../components/taskbar";
import Footer from "../components/footer";
// import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm(){
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    function submit(e){
        e.preventDefault();
        fetch(`https://formcarry.com/s/${process.env.REACT_APP_EMAIL_KEY}`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({email: email, name: name, message: message})
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.code === 200){
                    setSubmitted(true);
                } else{
                    setError(res.message);
                }
            })
            .catch((error) => setError(error));
        // console.log(process.env.REACT_APP_EMAIL_KEY);
    }

    if (error){
        alert(`${error}`);
    }

    if (submitted){
        alert("Message sent!");
    }

    return(
        <div>
            <Taskbar/>

            <div className="bg-[#E7D3AB] px-16 min-h-screen font-satoshi text-4xl flex flex-col justify-center ">
                <div id="header" className="flex flex-col gap-3">
                    <div className="font-satoshi text-[#333335] text-4xl md:text-7xl">
                        Contact Me!
                    </div>
                    {/* <h2 className="border-b border-[#333335]"></h2> */}
                </div>
                <form className="flex flex-col w-2/3 mt-5 gap-3" onSubmit={submit}>
                    <div className="flex gap-5 w-full">
                        <div id="email_input" className="flex flex-col w-1/2">
                            <label className="text-2xl">Email:</label>
                            <input type="email" id="email" name="email" className="bg-[#333335] rounded-sm text-[#E7D3AB] p-2 text-base" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        <div id="name_input" className="flex flex-col w-1/2">
                            <label className="text-2xl">Name:</label>
                            <input className="bg-[#333335] rounded-sm text-[#E7D3AB] p-2 text-base" value={name} onChange={(e) => setName(e.target.value)} required/>
                        </div>
                    </div>
                    
                    <div id="message_input" className="flex flex-col">
                        <label className="text-2xl">Message:</label>
                        <textarea rows="8" className="bg-[#333335] rounded-sm resize-none text-[#E7D3AB] p-2 text-base" value={message} onChange={(e) => setMessage(e.target.value)} required/>
                    </div>

                    <input type="submit" value="Submit" className="bg-[#31539C] text-[#E7D3AB] p-2 rounded-sm w-1/3 text-lg hover:bg-[#223A6D] mt-5" required/>
                </form>
            </div>

            <Footer/>
        </div>
    )
}