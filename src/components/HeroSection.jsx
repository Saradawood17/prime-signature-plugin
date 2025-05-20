import React from "react";
import heroBackground from "../assets/heroBackground.png";

const HeroSection = () => {
  return (
    <div
      className=" w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 md:px-16"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >

        <div className="max-w-4xl text-white text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Signature Technology Is A Tech-<br />
            Powered Company Driving <br />
            Innovative Business Solutions
          </h1>
          <p className="mt-6 text-sm md:text-base text-gray-300">
            We build and scale ventures through in-house expertise spanning development,
            logistics, marketing, and operations. Our focus is on creating agile, data-driven
            businesses tailored to the Middle East market.
          </p>
        </div>
      </div>
   
  );
};

export default HeroSection;
