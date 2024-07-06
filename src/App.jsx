// App.js
import React, { useEffect, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar';
import Routing from './utils/Routing';
import Cursor from './components/Cursor';
import MobileViewMessage from './MobileViewMessage';

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='bg-zinc-900'>
      {isDesktop ? (
        <div className='mobile-hidden'>
          <Navbar />
          <Routing />
        </div>
      ) : (
        <MobileViewMessage />
      )}
    </div>
  );
}

export default App;
