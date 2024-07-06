import React, { useState } from 'react'
import Stripe from './Stripe'

function Stripes() {

    var data = [
        {url: "/linkedin.png",title: "LinkedIn", isHovered: false},
        {url: "/github (1).png", title: "GitHub", isHovered: false},
        {url: "/gmail.png", title: "GMail", isHovered: false},
    ]

    const [ishovered, setIshovered] = useState(false);

    const handleEnter = () => {
      setIshovered(true);
    }

    const handleLeave = () => {
      setIshovered(false);
    }

  return (
    <div className='w-full flex items-center'>
        {data.map((item,index) => (
            <Stripe val={item} key={index} index={index} handleEnter={handleEnter} handleLeave={handleLeave}/>
        ))}
    </div>
  )
}

export default Stripes