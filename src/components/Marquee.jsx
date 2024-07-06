import React from 'react'
import { motion } from 'framer-motion'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-zinc-100 text-zinc-900'>
        <div className=' border-t-2 border-b-2 border-zinc-400 flex overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 10}} className="text-[17vw] leading-none font-['Pike_Regular'] font-semibold pt-10 -mb-23 pr-20">PROJECTS LOADING</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 10}} className="text-[17vw] leading-none font-['Pike_Regular'] font-semibold pt-10 -mb-23 pr-20">PROJECTS LOADING</motion.h1>          
        </div>
    </div>
  )
}

export default Marquee