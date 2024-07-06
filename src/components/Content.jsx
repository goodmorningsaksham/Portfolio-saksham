import React from 'react'
import Button from './Button'
import Spline from '@splinetool/react-spline'
import { TextGenerateEffect } from './ui/text-generate-effect'

function Content() {

  const words = "Relentlessly Perfecting My Skills To Create Innovative Solutions."

  return (
    <div className=' relative overflow-hidden'>
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full max-w-screen-xl h-screen flex '>
        <div data-scroll data-scroll-speed=".3" className='w-[65%] h-[90%] flex flex-col justify-center items-start pt-28 gap-8 text-zinc-100'>
            <TextGenerateEffect words={words} />
            <h4 className='text-2xl leading-1 w-3/4 mb-2 mt-8 font-["Helvetica Neue"]'>Hi, I am <span className='font-semibold text-teal-300'>Saksham</span>, a pre-final year CS student learning new tech and building in <span className='font-semibold text-teal-300'>NextJS</span>, based in India.</h4>
            <Button title='Wanna Know More?'/>
        </div>
        <div data-scroll data-scroll-speed=".3" className='w-[35%] h-[65%] mt-48'>
 
          <h4 className='absolute translate-x-[93%] translate-y-[950%] text-xl leading-1 w-2vw mb-2 mt-8 font-["Helvetica Neue"] text-white'>and my name's <span className='font-semibold text-teal-300'>Robo-i</span>!</h4>
        </div>
    </div>
    <Spline className='absolute z-50  w-full h-full translate-x-[37.5%] -translate-y-[93%]' scene="https://prod.spline.design/aT63CJTDUHxniFT0/scene.splinecode" />
    </div>
  )
}

export default Content