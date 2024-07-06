import React from 'react'
import { AuroraBackground } from './components/ui/aurora-background'
import Content from './components/Content'
import Marquee from './components/Marquee'
import Products from './components/Products'
import Contact from './components/Contact'
import { WavyBackground } from './components/ui/wavy-background'
import Spline from '@splinetool/react-spline'


function Home() {
  return (
    <div>
     
        <AuroraBackground>
       
            <Content />
            
        </AuroraBackground>
        <Marquee />
        <Products />
        <Contact />
    </div>
  )
}

export default Home