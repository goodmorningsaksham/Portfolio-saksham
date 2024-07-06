import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var products = [
    { title: "Starbucks UI", description: "Developed an animated interface concept for Starbucks to practice and refine my skills using ReactJs, LocomotiveJs, and GSAP. This project aimed to create a dynamic and engaging user experience, showcasing my ability to effectively utilize advanced front-end technologies for seamless performance and visually appealing animations." },
    { title: "ShopIt", description: "Developed an e-commerce website using Node.js, EJS, Express.js, and MongoDB. This project involved creating a robust back-end infrastructure, dynamic templating with EJS, efficient routing with Express.js, and a scalable database using MongoDB, ensuring a seamless and interactive user experience." },
    { title: "RAG Chatsite", description: "Currently developing a website using Next.js that features a RAG-implemented chatbot. This innovative feature enables users to engage in conversations with my resume, providing an interactive and unique user experience." },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="relative bg-zinc-900">
      {products.map((val, index) => (
        <Product val={val} key={index} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window mt-5 absolute w-[32rem] h-[23rem] bg-white left-[44%] overflow-hidden rounded-lg"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
            className="w-full h-full bg-sky-100 overflow-hidden rounded-lg"
          >
            <video className="w-full h-full object-cover"  autoPlay muted loop src="/starBuck1.mp4"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
            className="w-full h-full bg-sky-300 overflow-hidden rounded-lg"
          >
            <img src="/faxion.png" className="w-full h-full object-cover"/>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
            className="w-full h-full bg-sky-400 rounded-lg"
          >
            <img src="/resumeChat.png" className="w-full h-full object-cover"/>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
