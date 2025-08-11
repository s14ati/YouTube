import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  const [sidebar, setSideBar] = useState(true);
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Navbar remains at the top */}
      <Navbar setSideBar={setSideBar} sidebar={sidebar} />

      {/* Main content area */}
      <div className="flex flex-1">
        {/* Sidebar: hide on small screens, show on md and above */}
        <div className={`${sidebar ? "block" : "hidden"} md:block`}>
          <Sidebar sidebar={sidebar} />
        </div>

        {/* Content Area */}
        <main className="flex-1 bg-[#f9f9f9] p-4 overflow-auto">
          <Outlet context={{ sidebar }} />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
