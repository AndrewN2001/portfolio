import React, {useEffect, useState} from 'react'
import './index.css';
import Taskbar from './components/taskbar.js';
import Footer from './components/footer.js';
import profilepic from "../src/images/ProfilePic.png";
import ProjectInfo from './components/projectinfo.js';

function App() {
  const experienceList = [
    {
      category: "Languages",
      items: ["Javascript", "HTML", "CSS", "Python", "C++", "SQL", "PHP"]
    },
    {
      category: "Technologies/Frameworks",
      items: ["React", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "Bootstrap", "jQuery"]
    },
    {
      category: "Developer Tools",
      items: ["Github", "Visual Studio Code", "Pycharm", "MongoDB Compass", "MySQL Workbench", "Postman", "Jupyter Notebook"]
    },
  ];
  const [selectProject, setSelectProject] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div id='main_page'>
      <Taskbar/>

      <div id='landing_page' className="bg-[#31539C] min-h-screen min-w-screen flex flex-col justify-center">
        <div className='mx-16 my-10 gap-12 flex flex-col text-[#E7D3AB]'>
          <h1 className='text-5xl md:text-7xl italic w-auto text-left mr-16'>“There is only one thing that makes a dream impossible to achieve: the fear of failure."</h1>
          <h1 className='text-2xl md:text-4xl font-satoshi'>Hi, my name is Andrew Nguyen.</h1>
        </div>
      </div>

      <div id='secondary_page' className='min-w-screen bg-[#E7D3AB] px-20 py-20'>
        <div id="about_me" className='grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 pb-10'>
          <div className="flex flex-col justify-center">
            <h1 className='text-[#333335] font-satoshi font-bold italic text-4xl'>Who am I?</h1>
            <h2 className='text-[#333335] font-satoshi text-2xl pt-6 pr-6'>
              I am a senior at the University of Houston studying Computer Science, based in Houston, TX. Since 2020, I spend my days diving into the world of code and algorithms, constantly learning new technologies and expanding my knowledge and expertise. When I'm not writing code, you can find me at the gym creating new PRs, documenting my day-to-day adventures through my lens, or getting lost in the sounds of a new song genre. 
            </h2>
          </div>

          <div id="image" className='md:max-w-[40rem] md:max-h-[40rem] mx-auto'>
              <img src={profilepic} className='max-w-full h-auto rounded-full shadow-xl' alt=""/>
          </div>
        </div>

        <div id='experience' className='min-w-screen bg-[#E7D3AB] pb-10 flex flex-col gap-4'>
          <h1 className='text-[#333335] font-satoshi font-bold italic text-4xl'>
              Experience
          </h1>

          <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-3 items-stretch">
            {experienceList.map((experience, index) => (
              <div key={index} className='bg-[#333335] text-[#E7D3AB] text-center text-xl aspect-square flex flex-col py-5'>
                <h1 className='ml-4 text-2xl italic'>
                  {experience.category}
                </h1>

                <div className='flex flex-wrap gap-2 px-3 items-center justify-center mt-5'>
                  {experience.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className='shadow-2xl px-3 py-2 mt-1 text-xl md:text-xl bg-[#3d3d3f] hover:bg-[#525253] rounded-md'>
                      {skill}
                    </div>
                  ))}  
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="projects">
          <h1 className='text-[#333335] font-satoshi font-bold italic text-4xl pt-10'>Projects</h1>
          <div id="project_container" className='grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 pt-6'>
            <button className='bg-[#31539C] text-[#EEE0C3] text-left text-4xl md:text-3xl italic hover:bg-[#223A6D] aspect-square flex flex-col gap-2 justify-center pl-8' onClick={() => setSelectProject("first")}>
                <h1>TopShape</h1>
                <h1 className='text-base'>December 2024 - Ongoing</h1>
            </button>
            <button className='bg-[#31539C] text-[#EEE0C3] text-left text-4xl md:text-3xl italic hover:bg-[#223A6D] aspect-square flex flex-col gap-2 justify-center pl-8' onClick={() => setSelectProject("second")}>
                <h1>Voluntify</h1>
                <h1 className='text-base'>August 2024 - December 2024</h1>
            </button>
            <button className='bg-[#31539C] text-[#EEE0C3] text-left text-4xl md:text-3xl italic hover:bg-[#223A6D] aspect-square flex flex-col gap-2 justify-center px-8' onClick={() => setSelectProject("third")}>
                <h1>Military Aircraft Detection Model</h1>
                <h1 className='text-base text-left'>August 2024 - November 2024</h1>
            </button>
          </div>
        </div>
      </div>
      <ProjectInfo selectedProject={selectProject} setSelectedProject={setSelectProject}/>
      
      <Footer/>
    </div>
  );
}

export default App;
