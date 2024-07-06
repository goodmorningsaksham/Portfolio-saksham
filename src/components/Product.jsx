import React, { useState } from 'react'
import Button from './Button'

function Product({ val, mover, count }) {

  const {title, description} = val;
  const [ishovered, setIshovered] = useState(false);
    
  return (
    <div className='w-full py-5 h-[23rem] text-white bg-zinc-900'>
        <div  onMouseEnter={() => {mover(count)}} className={` max-w-screen-xl h-[23rem] mx-auto flex items-center justify-between ${count===0 ? "" : "border-t-2" } `}>
            <h1 className='text-5xl capitalize font-medium'>{title}</h1>
            <div className='w-1/3 flex flex-col justify-center items-start gap-10'>
                <p>{description}</p>
                <Button />
            </div>
        </div>
    </div>
  )
}

export default Product