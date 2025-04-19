import React from "react";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { LuCopyright } from "react-icons/lu";

const Contact = () => {
  const contactList = [
    {
      link: "mailto:jkmirano.pro@gmail.com",
      content: "jkmirano.pro@gmail.com",
      icon: <CiMail size={24} />,
    },
    {
      link: "https://www.linkedin.com/in/jkmirano-pro/",
      content: "https://www.linkedin.com/in/jkmirano-pro/",
      icon: <CiLinkedin size={24} />,
    },
    {
      link: "https://github.com/jkmirano",
      content: "https://github.com/jkmirano",
      icon: <FiGithub size={20} />,
    },
  ];

  return (
    <div
      id="contact"
      className="bg-sky-500 text-white py-16 px-5 font-montserrat text-center flex items-center flex-col"
    >
      <h1 className="font-medium text-3xl mb-10">Get in Touch!</h1>

      <ul className="mb-10">
        {contactList.map(({ link, content, icon }, idx) => (
          <li
            className="mb-2 hover:text-cyan-200 transition-colors"
            key={`c-${idx}`}
          >
            <a
              className="flex flex-wrap items-start justify-center underline"
              href={link}
            >
              {icon}
              <span className="ml-4">{content}</span>
            </a>
          </li>
        ))}
      </ul>

      <p className="text-sm flex flex-wrap">
        <LuCopyright size={20} />
        <span className="ml-4">
          2025 by John Kennith Mirano. All Rights Reserved.
        </span>
      </p>
    </div>
  );
};

export default Contact;
