import React from "react";
import ParticleBackground from "../components/ParticleBackground";

const Banner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-animated">
      <ParticleBackground />
      <div className="text-white p-5">
        <h1 className="font-medium text-8xl mb-7">Hi, just call me Ken!</h1>
        <h2 className="font-light text-3xl mb-7">
          FullStack Application Developer
        </h2>
        <p className="font-normal text-xl mb-7">
          Building Dynamic, Scalable Web Applications – Expertise in React,
          Angular, Node.js, and everything in between.
          <br />
          To know more details, click the button below!
        </p>
        <button
          className="bg-cyan-900 text-white py-2 px-4 rounded transition-colors hover:bg-cyan-700"
          type="button"
        >
          Know More!
        </button>
      </div>
    </div>
  );
};

export default Banner;
