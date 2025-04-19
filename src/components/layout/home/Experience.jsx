import React, { useState } from "react";
import AvaloqSvg from "../../../assets/img/avaloq.svg";
import IBMSvg from "../../../assets/img/ibm.svg";
import NityoSvg from "../../../assets/img/nityo.svg";
import DatawordsSvg from "../../../assets/img/datawords.svg";
import MaverickHeroesJpg from "../../../assets/img/maverick-heroes.jpg";
import Button from "@mui/material/Button";
import { Modal } from "../../utils/Modal";

const Experience = () => {
  const jobHistory = [
    {
      logo: AvaloqSvg,
      jobTitle: "Senior Software Engineer | Crypto",
      jobPositions: [
        {
          position: "Senior Software Engineer | Crypto",
          duration: "January 2025 - Present",
        },
      ],
      company: "Avaloq",
      location: "Philippines",
      duration: "January 2025 - Present",
      tasks: [
        "Developing Frontend Applications with Angular",
        "Creating reusable components/new features for future development.",
        "Actively worked in an agile software development environment which utilized Scrum process, daily standup, retro, sprint meetings for code sharing and problem solving.",
      ],
    },
    {
      logo: IBMSvg,
      jobTitle: "Application Developer - Experience Frontend",
      jobPositions: [
        {
          position: "Application Developer - Experience Frontend",
          duration: "December 2021 - January 2025",
        },
      ],
      company: "IBM",
      location: "Philippines",
      duration: "December 2021 - January 2025",
      tasks: [
        "Developing Frontend Applications with Angular and React.",
        "Developing Backend Applications with Node.js (Express.js) and passing data through RESTful APIs.",
        "Database management tools (MySQL and MongoDB).",
        "Creating reusable components/new features for future development (including the use of libraries like IBM Carbon Design System, Ionic (Android & iOs), Material, etc...).",
        "Actively worked in an agile software development environment which utilized Scrum process, daily engineering meetings for code sharing and problem solving.",
      ],
    },
    {
      logo: NityoSvg,
      jobTitle: "Application Developer - Experience Frontend",
      jobPositions: [
        {
          position: "Application Developer - Experience Frontend",
          duration: "September 2020 - December 2021",
        },
      ],
      company: "Nityo Infotech Services",
      location: "Philippines",
      duration: "September 2020 - December 2021",
      tasks: [
        "Developing Frontend Applications with Angular and currently deployed to IBM team",
        "Creating reusable components/new features for future development (including the use of libraries like IBM Carbon Design System, Ionic (Android & iOs), Material, etc...).",
        "Collaborating with Designers for their UI Designs and Backend Developers for using their RESTful APIs",
        "Actively worked in an agile software development environment which utilized Scrum process, daily engineering meetings for code sharing and problem solving.",
      ],
    },
    {
      logo: DatawordsSvg,
      jobTitle: "Frontend Web Developer",
      jobPositions: [
        {
          position: "Frontend Web Developer",
          duration: "January 2019 - September 2020",
        },
        {
          position: "Senior Digital Specialist / WordPress Developer",
          duration: "January 2018 - December 2018",
        },
        {
          position: "Digital Specialist",
          duration: "February 2017 - December 2017",
        },
      ],
      company: "Datawords Group",
      location: "Philippines",
      duration: "February 2017 - September 2020",
      tasks: [
        "Developing Frontend Applications with Angular",
        "Creating reusable components/new features for future development (including the use of libraries like IBM Carbon Design System, Ionic (Android & iOs), Material, etc...).",
        "Collaborating with Designers for their UI Designs and Backend Developers for using their RESTful APIs",
        "Actively worked in an agile software development environment which utilized Scrum process, daily engineering meetings for code sharing and problem solving.",
      ],
    },
    {
      logo: MaverickHeroesJpg,
      jobTitle: "Intern / Junior Frontend Web Developer",
      jobPositions: [
        {
          position: "Junior Frontend Web Developer",
          duration: "February 2016 - January 2017",
        },
        {
          position: "Intern Frontend Web Developer",
          duration: "November 2015 - January 2016",
        },
      ],
      company: "Maverick Heroes Inc.",
      location: "Philippines",
      duration: "November 2015 - January 2017",
      tasks: [
        "Developing Web Designs into Web App and used as themes for WordPress and Laravel websites.",
        "Collaborating with Designers for their UI Designs and Backend Developers for integrating their backend codes using php.",
      ],
    },
  ];

  const [openModal, setOpenModal] = useState([false, false, false, false]);

  const handleOpenModal = (index) => {
    const newVal = jobHistory.map((jh, idx) => (index !== idx ? false : true));
    setOpenModal(newVal);
  };

  return (
    <div
      id="experience"
      className=" min-h-screen font-montserrat"
    >
      <div className="py-24 px-5 max-w-7xl m-auto">
        <h2 className="font-bold text-3xl text-cyan-900 mb-12">Experience</h2>

        <div className="flex flex-wrap">
          <p className="font-normal text-left text-xl text-cyan-900 mb-10">
            Overview of my professional experience, highlighting key positions,
            accomplishments, and the expertise I've gained across various
            industries. It demonstrates a proven track record of driving
            results, leading teams, and delivering impactful solutions. This
            section is designed to showcase my career progression and align my
            skills with the needs of forward-thinking organizations seeking a
            results-oriented and experienced professional.
          </p>

          <ul className="flex flex-wrap">
            {jobHistory.map(
              (
                {
                  logo,
                  jobTitle,
                  jobPositions,
                  company,
                  location,
                  duration,
                  tasks,
                },
                idx
              ) => (
                <li
                  className="w-full md:w-6/12 p-4 mb-8"
                  key={`jobItem-${idx}`}
                >
                  <div>
                    <div className="max-w-52 mb-4">
                      <img
                        className="h-20"
                        src={logo}
                        alt={company}
                      />
                    </div>

                    <div className="text-left text-cyan-900">
                      <h3 className="text-xl font-medium">{jobTitle}</h3>
                      <h4 className="font-medium mb-4">
                        {company}, {location} | {duration}
                      </h4>

                      <Button
                        variant="contained"
                        onClick={(e) => handleOpenModal(idx)}
                      >
                        Read more
                      </Button>

                      <Modal
                        onClose={(e) =>
                          setOpenModal([false, false, false, false])
                        }
                        open={openModal[idx]}
                        jobPositions={jobPositions}
                        tasks={tasks}
                      />
                    </div>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
