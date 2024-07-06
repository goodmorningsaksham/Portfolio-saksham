import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import Button from './Button'

function Stripe({ val,index,handleEnter, handleLeave }) {
  return (
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className={`w-[33.33%] px-12 py-5 ${val.isHovered ? "bg-zinc-600" : "bg-zinc-900"} border-t-[1px] border-r-[1px] border-b-[1px] border-zinc-700 flex justify-between items-center`}>
        <div className='flex items-center gap-8'>
          <div className={`w-[2.5vw] h-[5vh] overflow-hidden ${index === 1 ? "rounded-full" : "rounded-md"} ${index === 2 ? "bg-transparent" : "bg-white"} `}>
              <img className=' w-full h-full object-cover' src={val.url} alt="" />
          </div>
          <p className='text-2xl'>{val.title}</p>
        </div>
        <Button title='Check Out'/>
    </div>
  )
}

export default Stripe