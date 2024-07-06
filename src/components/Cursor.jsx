import React, { useEffect, useState } from 'react';

function Cursor() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleMouseMovement = (e) => {
      setX(e.clientX);
      setY(e.clientY);
    };
    document.addEventListener('mousemove', handleMouseMovement);
    return () => {
      document.removeEventListener('mousemove', handleMouseMovement);
    };
  }, []);

  return (
    <div
      className="bg-white absolute z-50 rounded-full mix-blend-difference w-14 h-14 -translate-x-[50%] -translate-y-[50%]"
      style={{ left: `${x}px`, top: `${y}px`}}
    >
    </div>
  );
}

export default Cursor;
