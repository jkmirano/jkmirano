import React from "react";
import MeImg from "../../../assets/img/me.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="py-24 px-5 max-w-7xl m-auto"
    >
      <h2 className="font-bold text-3xl text-cyan-900 mb-12">About Me</h2>

      <div className="lg:flex flex-wrap items-center">
        <div className="max-w-80 m-auto mb-14 lg:mr-10">
          <img
            src={MeImg}
            alt="John Kennith Mirano"
          />
        </div>

        <p className="font-normal text-xl text-cyan-900 flex-1 lg:text-left">
          Highly experienced and versatile full-stack developer with 9+ years of
          frontend expertise in Angular, React and 4 years of backend in Node.js
          and Express.js with database management using MongoDB and MySQL.
          Proficient in cloud platform development on Amazon Web Services (AWS)
          DevOps. Proven track record of delivering scalable, efficient, and
          user-friendly applications that meet business objectives.
        </p>
      </div>
    </div>
  );
};

export default About;
