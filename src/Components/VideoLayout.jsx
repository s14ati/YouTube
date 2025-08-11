import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function VideoLayout() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Navbar stays on top */}
      <Navbar />

      {/* Main content */}
      <div className="flex-1 bg-[#f9f9f9] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <Outlet />
      </div>
    </div>
  );
}

export default VideoLayout;
