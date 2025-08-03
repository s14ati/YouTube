import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

import Home from "./Pages/Home";
import Video from "./Pages/Video";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

// Layout wrapper to allow useLocation to work
function LayoutWrapper() {
  return <Layout />;
}

function Layout() {
  const [sidebar, setSideBar] = useState(true);
  const location = useLocation();

  const isVideoPage = location.pathname.startsWith("/video");

  return (
    <div className="flex flex-col w-full">
      {/* ✅ Show Navbar always */}
      <Navbar setSideBar={setSideBar} sidebar={sidebar} />

      <div className="flex">
        {!isVideoPage && <Sidebar sidebar={sidebar} />}
        <div className="flex-1 bg-[#f9f9f9] p-4">
          <Outlet context={{ sidebar }} />
        </div>
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/video/:categoryId/:videoId",
        element: <Video />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
