import React, { useEffect, useRef } from 'react'
import Button from './components/Button'
import Contact from './components/Contact'
import { gsap } from 'gsap'


function About() {
   const skills = "HTML/CSS, JavaScript, ReactJs, NodeJs , NextJs, Git, MongoDB, SQL"
   const exp1 = "General Secretary @ Thapar Amateurs Astronomy Society, Patiala"
   const exp2 = "Research Intern @ Indian Institute of Technology, Jammu"
   const t1 = "July,2024 - Present"
   const t2 = "June, 2024 - Present"
   
  const text = useRef();

  useEffect(() => {
    gsap.from("h1", { opacity: 0, y: 50, duration: 1});
    gsap.from("p", { opacity: 0, y: 50, duration: 1});
    gsap.from(".a1", { opacity: 0, x:-25, duration: 0.75, delay: 0.35});
    gsap.from(".a2", { opacity: 0, x: -25, duration: 0.75, delay: 0.35});
    gsap.from(".a3", { opacity: 0, x: 50, duration: 1});
  }, [])

   return (
    <>
    <div className=' pt-28 max-w-screen-xl w-full mx-auto h-screen bg-zinc-900 flex justify-between'>
      <div className='w-[65%] h-[90%] flex flex-col items-start  text-zinc-100'>
        <h1  className='text-7xl font-helvetica-bold mb-2'>Hi,</h1>
        <h1 className='text-7xl font-helvetica-bold'>I'm <span className='text-teal-300'>Saksham</span>!</h1>
        <p className='font-helvetica text-[20px] mt-6'>I’m a 3rd-year Computer Science and Business Systems student at Thapar Institute of Engineering and Technology, Patiala. Currently exploring GenAI and building with Next.js. Also, I love coffee!</p>
        <div className='a1 mt-6 '>
          <Button title='Chat With My Resume' color='teal'/>
        </div>
        <div className='a2 w-full mt-10 flex flex-col gap-2'>
          <h2 className='text-teal-300 text-2xl font-semibold font-helvetica tracking-wider'>Skills</h2>
          <span className='text-white font-normal text-lg'>{skills}</span>
          <h2 className='text-teal-300 mt-6 text-2xl font-semibold font-helvetica tracking-wider'>Experience</h2>
          <div className='w-full flex justify-between items-start'>
            <div className='flex flex-col'>
            <span className='text-white font-normal text-lg'>{exp2}</span>
            <span className='text-white font-normal text-lg'>{exp1}</span>
            </div>
            <div className='flex flex-col items-end pr-12'>
            <span className='text-white font-normal text-lg'>{t2}</span>
            <span className='text-white font-normal text-lg'>{t1}</span>
            </div>
          </div>
        </div>      
      </div>
      <div className='a3 w-[30%] h-[90%]  bg-sky-200'>
        <img className='w-full h-full object-cover' src="/saksHm.jpeg" alt="" />
      </div>
    </div>
    <Contact />
    </>
  )
}

export default About