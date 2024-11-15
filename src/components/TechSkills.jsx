import React from "react";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiAngular,
  SiAxios,
  SiFigma,
  SiIonic,
  SiJavascript,
  SiMapbox,
  SiMaplibre,
  SiMaterialdesign,
  SiMongodb,
  SiPostman,
  SiReact,
  SiRecoil,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { FaCss3Alt, FaGit, FaHtml5, FaNodeJs } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

const TechSkills = () => {
  const techSkills = [
    { name: "Angular", icon: <SiAngular size={40} /> },
    { name: "React", icon: <SiReact size={40} /> },
    { name: "Node.js", icon: <FaNodeJs size={40} /> },
    { name: "MongoDB", icon: <SiMongodb size={40} /> },
    { name: "RESTful API", icon: <TbApi size={40} /> },
    { name: "Axios", icon: <SiAxios size={40} /> },
    { name: "Redux", icon: <SiRedux size={40} /> },
    { name: "Recoil", icon: <SiRecoil size={40} /> },
    { name: "TanStack Query", icon: null },
    { name: "Mapbox", icon: <SiMapbox size={40} /> },
    { name: "MapLibre", icon: <SiMaplibre size={40} /> },
    { name: "IBM Carbon Design System", icon: null },
    { name: "Ionic", icon: <SiIonic size={40} /> },
    { name: "Material Design", icon: <SiMaterialdesign size={40} /> },
    { name: "HTML5", icon: <FaHtml5 size={40} /> },
    { name: "CSS", icon: <FaCss3Alt size={40} /> },
    { name: "JavaScript", icon: <SiJavascript size={40} /> },
    { name: "TypeScript", icon: <SiTypescript size={40} /> },
    { name: "Git", icon: <FaGit size={40} /> },
    { name: "BEM", icon: null },
    { name: "Agile", icon: null },
    { name: "Postman", icon: <SiPostman size={40} /> },
    { name: "Photoshop", icon: <SiAdobephotoshop size={40} /> },
    { name: "Adobe XD", icon: <SiAdobexd size={40} /> },
    { name: "Figma", icon: <SiFigma size={40} /> },
  ];

  return (
    <div className="bg-teal-100">
      <div className="py-24 px-5 max-w-7xl m-auto">
        <h2 className="font-bold text-3xl text-cyan-900 mb-12">
          Tech &amp; Skills
        </h2>
        <p className="font-normal text-xl text-cyan-900 mb-14">
          A collection of the tools, technologies, and frameworks I use to build
          modern, scalable web applications. From front-end development with
          React, Angular and JavaScript to back-end solutions with Node.js and
          databases, I’m passionate about crafting full-stack solutions that
          deliver performance and innovation.
        </p>

        <ul className="flex flex-wrap items-center justify-center max-w-screen-lg m-auto">
          {techSkills.map((ts, i) => (
            <li
              className="flex items-center font-bold text-xl m-4 text-gray-500 hover:scale-110 transition-transform"
              key={`tech-skill-${i}`}
            >
              {ts.icon ? ts.icon : ""}
              <span className="ml-2">{ts.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TechSkills;
