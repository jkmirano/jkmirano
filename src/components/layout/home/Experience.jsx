import React from "react";
import IBMSvg from "../../../assets/img/ibm.svg";
import NityoSvg from "../../../assets/img/nityo.svg";
import DatawordsSvg from "../../../assets/img/datawords.svg";
import MaverickHeroesJpg from "../../../assets/img/maverick-heroes.jpg";

const Experience = () => {
  const jobHistory = [
    {
      logo: IBMSvg,
      jobTitle: "Application Developer - Experience Frontend",
      company: "IBM",
      location: "Philippines",
      duration: "December 2021 - Present",
      tasks: [
        "Developing Frontend Applications with Angular and React.",
        "Developing Backend Applications with Node.js (Express.js) and passing data through RESTful APIs.",
        "Database management tools (MySQL and MongoDB).",
        "Creating reusable components/new features for future development (including the use of libraries like IBM Carbon Design System, Ionic (Android &amp; iOs), Material, etc...).",
        "Actively worked in an agile software development environment which utilized Scrum process, daily engineering meetings for code sharing and problem solving.",
      ],
    },
    {
      logo: NityoSvg,
      jobTitle: "Application Developer - Experience Frontend",
      company: "Nityo Infotech Services",
      location: "Philippines",
      duration: "September 2020 - December 2021",
      tasks: [
        "Developing Frontend Applications with Angular and currently deployed to IBM team",
        "Creating reusable components/new features for future development (including the use of libraries like IBM Carbon Design System, Ionic (Android &amp; iOs), Material, etc...).",
        "Collaborating with Designers for their UI Designs and Backend Developers for using their RESTful APIs",
        "Actively worked in an agile software development environment which utilized Scrum process, daily engineering meetings for code sharing and problem solving.",
      ],
    },
    {
      logo: DatawordsSvg,
      jobTitle: "Frontend Web Developer",
      company: "Datawords Group",
      location: "Philippines",
      duration: "January 2019 - September 2020",
      tasks: [
        "Developing Frontend Applications with Angular",
        "Creating reusable components/new features for future development (including the use of libraries like IBM Carbon Design System, Ionic (Android &amp; iOs), Material, etc...).",
        "Collaborating with Designers for their UI Designs and Backend Developers for using their RESTful APIs",
        "Actively worked in an agile software development environment which utilized Scrum process, daily engineering meetings for code sharing and problem solving.",
      ],
    },
    {
      logo: DatawordsSvg,
      jobTitle: "Senior Digital Specialist / WordPress Developer",
      company: "Datawords Group",
      location: "Philippines",
      duration: "January 2018 - December 2018",
      tasks: [
        "Specializing in content management using CMS tools like Drupal, Magento, Wordpress, SiteCore, Joomla, AEM 5 & 6, PrestaShop and SalesForce",
        "Developing WordPress websites by using Theme builders",
      ],
    },
    {
      logo: DatawordsSvg,
      jobTitle: "Digital Specialist",
      company: "Datawords Group",
      location: "Philippines",
      duration: "February 2017 - December 2017",
      tasks: [
        "Specializing in content management using CMS tools like Drupal, Magento, Wordpress, SiteCore, Joomla, AEM 5 & 6, PrestaShop and SalesForce",
      ],
    },
    {
      logo: MaverickHeroesJpg,
      jobTitle: "Junior Frontend Web Developer",
      company: "Maverick Heroes Inc.",
      location: "Philippines",
      duration: "February 2016 - January 2017",
      tasks: [
        "Developing Web Designs into Web App and used as themes for WordPress and Laravel websites.",
        "Collaborating with Designers for their UI Designs and Backend Developers for integrating their backend codes using php.",
      ],
    },
    {
      logo: MaverickHeroesJpg,
      jobTitle: "Intern Frontend Web Developer",
      company: "Maverick Heroes Inc.",
      location: "Philippines",
      duration: "November 2015 - January 2016",
      tasks: [
        "Developing Web Designs into Web App and used as themes for WordPress and Laravel websites.",
        "Collaborating with Designers for their UI Designs and Backend Developers for integrating their backend codes using php.",
      ],
    },
  ];

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

          <ul className="flex flex-wrap overflow-auto max-h-[500px]">
            {jobHistory.map(
              ({ logo, jobTitle, company, location, duration, tasks }, idx) => (
                <li
                  className="w-full md:w-6/12 p-4"
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

                      <ul className="list-disc pl-4">
                        {tasks.map((task, tIdx) => (
                          <li key={`jTidx-${tIdx}`}>{task}</li>
                        ))}
                      </ul>
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
