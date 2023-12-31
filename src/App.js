import React, {useEffect} from 'react'
import { Link } from "react-router-dom"
import './index.css';
import Taskbar from './components/taskbar.js';
import Footer from './components/footer.js';

function App() {
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

      <div id='secondary_page' className='min-w-screen bg-[#E7D3AB] py-20 px-16'>
        <div id="about_me">
          <h1 className='text-[#333335] font-satoshi font-bold italic text-4xl'>Who am I?</h1>
          <h2 className='text-[#333335] font-satoshi text-2xl pt-6'>
            I am a senior at the University of Houston studying Computer Science, based in Houston, TX. Since 2020, I spend my days diving into the world of code and algorithms, constantly learning new technologies and expanding my knowledge and expertise. When I'm not writing code, you can find me at the gym creating new PRs, documenting my day-to-day adventures through my lens, or getting lost in the sounds of a new song genre. 
          </h2>
        </div>

        <div id="projects">
          <h1 className='text-[#333335] font-satoshi font-bold italic text-4xl pt-10'>Projects</h1>
          <div id="project_container" className='grid grid-cols-1 grid-rows-4 md:grid-cols-4 md:grid-rows-1 pt-6'>
            <Link to='/project-one' className='bg-[#31539C] text-[#EEE0C3] text-2xl hover:bg-[#223A6D] aspect-square flex justify-center items-center'>Project 1</Link>
            <Link to='/project-two' className='bg-[#31539C] text-[#EEE0C3] text-2xl hover:bg-[#223A6D] aspect-square flex justify-center items-center'>Project 2</Link>
            <Link to='/project-three' className='bg-[#31539C] text-[#EEE0C3] text-2xl hover:bg-[#223A6D] aspect-square flex justify-center items-center'>Project 3</Link>
            <Link to='/project-four' className='bg-[#31539C]  text-[#EEE0C3] text-2xl hover:bg-[#223A6D] aspect-square flex justify-center items-center'>Project 4</Link>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
