import React from 'react'
import { SparklesCore } from './ui/sparkles';
import Stripes from './Stripes';

function Contact() {
  return (
    <>
    <div className="h-[30rem] relative w-full bg-zinc-900 flex flex-col items-center justify-center overflow-hidden rounded-md text-white">
    <div className="w-full absolute inset-0 h-screen">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
    </div>
         <h1 data-scroll data-scroll-section data-scroll-speed=".1" className='text-[20vh] font-semibold mb-12 text-white'>GET IN <span className='font-kepler-bold-italic'>Touch</span></h1>
         <Stripes />
    </div>
  </>
  )
}


export default Contact;
