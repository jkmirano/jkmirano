import React from "react";
import { Outlet } from "react-router-dom";
import NavMenu from "../components/layout/nav/admin/NavMenu";

const dashboard = () => {
  return (
    <div className="flex flex-wrap">
      <NavMenu
        cssClassNames={`font-montserrat bg-gray-200 min-h-screen basis-[200px]`}
      />

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default dashboard;
