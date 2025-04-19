import React from "react";

const NavList = ({ activePath = "home" }) => {
  const routes = [
    // {
    //   path: "#",
    //   pathName: "Overview",
    //   cssClassNames: `transition-colors block px-4 py-2 hover:bg-cyan-600 hover:text-white ${
    //     activePath === "overview" ? "bg-cyan-600 text-white" : ""
    //   }`,
    // },
    {
      path: "#",
      pathName: "Home",
      cssClassNames: `transition-colors block px-4 py-2 hover:bg-cyan-600 hover:text-white ${
        activePath === "home" ? "bg-cyan-600 text-white" : ""
      }`,
    },
    {
      path: "#",
      pathName: "Tech & Skills",
      cssClassNames: `transition-colors block px-4 py-2 hover:bg-cyan-600 hover:text-white ${
        activePath === "tech" ? "bg-cyan-600 text-white" : ""
      }`,
    },
    {
      path: "#",
      pathName: "Projects",
      cssClassNames: `transition-colors block px-4 py-2 hover:bg-cyan-600 hover:text-white ${
        activePath === "projects" ? "bg-cyan-600 text-white" : ""
      }`,
    },
    {
      path: "#",
      pathName: "Experiences",
      cssClassNames: `transition-colors block px-4 py-2 hover:bg-cyan-600 hover:text-white ${
        activePath === "exepriences" ? "bg-cyan-600 text-white" : ""
      }`,
    },
  ];

  return (
    <nav>
      <ul>
        {routes.map(({ path, pathName, cssClassNames }, index) => (
          <li key={`d-p-${index}`}>
            <a
              className={cssClassNames}
              href={path}
            >
              {pathName}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
