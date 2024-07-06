import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const logoRef = useRef(null);

  const handleMouseMove = (e) => {
    if (isHovering && logoRef.current) {
      const logoElement = logoRef.current;
      const logoRect = logoElement.getBoundingClientRect();
      const offsetX = e.clientX - logoRect.left - logoRect.width / 2;
      const offsetY = e.clientY - logoRect.top - logoRect.height / 2;
      setCursorPosition({ x: offsetX, y: offsetY });
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setCursorPosition({ x: 0, y: 0 }); // Reset cursor position when not hovering
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovering]);

  return (
    <div className='absolute z-10 translate-x-[10%] max-w-screen-xl w-full mx-auto py-5 flex items-center justify-between text-zinc-100 font-semibold border-b-[1px] border-zinc-100 border-opacity-30'>
      <Link
        ref={logoRef}
        className='bg-zinc-100 w-7 h-7 text-black text-center rounded-md logo'
        to="/"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `translate(${cursorPosition.x / 5}px, ${cursorPosition.y / 5}px)`, // Increase the divisor to make the movement more pronounced
          transition: 'transform 0.1s ease-out'
        }}
      >
        S<span className='text-xs'>K</span>
      </Link>
      <div className='flex gap-16'>
        <Link className='hover:tracking-wider transition-all duration-300' to="/about">About</Link>
        <Link className='hover:tracking-wider transition-all duration-300' to="/">Projects</Link>
      </div>
    </div>
  );
}

export default Navbar;
