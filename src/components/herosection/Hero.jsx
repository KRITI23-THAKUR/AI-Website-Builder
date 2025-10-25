import React from "react";
import Input from "./Input";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-7xl uppercase font-extrabold text-primary mb-4">
          AI Website Builder
        </h1>
        <p className="text-lg text-foreground max-w-xl text-center">
          Effortlessly create stunning websites with the power of AI. No coding
          required—just your ideas.
        </p>
      </div>
    </>
  );
};

export default Hero;
