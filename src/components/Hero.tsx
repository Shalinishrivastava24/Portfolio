import React from "react"
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="bg-[url()] lg:bg-[url(/PNG.png)] min-h-screen bg-cover">
        <Navbar />
        <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
            <div className="hidden lg:block"></div>
            <div className="text-[100px] sm:text-[75px] font-bold leading-tight flex justify-left items-left">
                <div>
              
                <p data-aos="zoom-in-up">I am</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;
