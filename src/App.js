import React from 'react'
import './index.css';
import Taskbar from './components/taskbar.js';
import Footer from './components/footer.js';
import ProjectOne from './pages/projectone.js';
import ProjectTwo from './pages/projecttwo.js';
import ProjectThree from './pages/projectthree.js';
import ProjectFour from './pages/projectfour.js';

function App() {
  return (
    <div id='main_page'>
      <Taskbar/>

      <div id='landing_page' className="bg-[#31539C] min-h-screen min-w-screen flex flex-col justify-center">
        <div className='ml-16 gap-12 flex flex-col text-[#E7D3AB]'>
          <h1 className='text-7xl italic w-[75rem] text-left'>“There is only one thing that makes a dream impossible to achieve: the fear of failure."</h1>
          <h1 className='text-4xl font-satoshi'>Hi, my name is Andrew Nguyen.</h1>
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
          <div id="project_container" className='grid grid-cols-4 grid-rows-1 pt-6'>
            <button className='bg-[#31539C] text-[#EEE0C3] text-lg hover:bg-[#223A6D] aspect-square flex justify-center items-center'>Project 1</button>
            <button className='bg-[#31539C] text-[#EEE0C3] text-lg hover:bg-[#223A6D] aspect-square flex justify-center items-center'>Project 2</button>
            <button className='bg-[#31539C] text-[#EEE0C3] text-lg hover:bg-[#223A6D] aspect-square flex justify-center items-center'>Project 3</button>
            <button className='bg-[#31539C]  text-[#EEE0C3] text-lg hover:bg-[#223A6D] aspect-square flex justify-center items-center'>Project 4</button>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
