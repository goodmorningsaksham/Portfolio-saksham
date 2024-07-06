import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import About from '../About';
import Content from '../components/Content';
import Home from '../Home';
import { AuroraBackground } from '../components/ui/aurora-background';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />  
      <Route path="/about" element={<About />} />
        {/* Add other routes as needed */}
    
    </Routes>
  );
}

export default Routing;
