import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import Video from "./Pages/Video";
import MainLayout from "./Components/MainLayout";
import VideoLayout from "./Components/VideoLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // sidebar layout
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/video",
    element: <VideoLayout />, // no sidebar layout
    children: [{ path: ":categoryId/:videoId", element: <Video /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
