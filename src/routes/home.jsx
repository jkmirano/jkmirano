import React from "react";
import ParticleBackground from "../components/ParticleBackground";

const home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-animated">
      <ParticleBackground />
      <div className="text-white text-center font-montserrat">
        <h1 className="font-medium text-8xl mb-7">Hi, just call me Ken!</h1>
        <h2 className="font-light text-3xl mb-7">
          FullStack JavaScript Developer
        </h2>
        <p className="font-normal text-xl mb-7">
          This is my online resume on github and it's now v2! <br />
          To know more details, click the button below!
        </p>
      </div>
    </div>
  );
};

export default home;
