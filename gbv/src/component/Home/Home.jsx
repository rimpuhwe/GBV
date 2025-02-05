import React from "react";
import { useState, useEffect } from "react";
import Button from "../button/button";
import { motion } from "framer-motion";
import "../Home/Home.css";

const text = [
  { text: "Together, We Can End Gender-Based Violence" },
  { text: "Hand on Hand , We can end GBV" },
  { text: "Be aware of the violence you are facing" },
  { text: "Safe place to get help and support" },
];
function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div  className= 'w-full h-full relative'>
      <div className="w-full h-full relative z-1">
        <motion.img
          src="https://www.dsw.org/wp-content/uploads/2023/12/END-gbv-1.jpg"
          alt="stop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          width="100%"
          height="auto"
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.p className="absolute top-50 left-10 text-3xl font-bold text-white z-3"
          
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {text[currentIndex].text}
        </motion.p>
      </div>
      <div className="bg-purple-600/20 w-full h-full absolute z-2 top-0 left-0">
        <div className="w-4/10 absolute bottom-20 right-5 flex justify-between items-center">
          <Button children="Report an incident"  />
          <Button children="Get Support"  />
          <Button children="Learn More"  />
        </div>
      </div>
    </div>
  );
}

export default Home;
