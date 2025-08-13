import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import Video from "./Pages/Video";
import MainLayout from "./Components/MainLayout";
import VideoLayout from "./Components/VideoLayout";
import LogIn from "./Pages/LogIn";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer} from "react-toastify";

function AuthListenerLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (users) => {
      if (users) {
        console.log("Logged In");
        navigate("/");
      } else {
        console.log("Logged Out");
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return <Outlet />; 
}


const router = createBrowserRouter([
  {
    element: <AuthListenerLayout />, 
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [{ path: "/", element: <Home /> }],
      },
      {
        path: "/video",
        element: <VideoLayout />,
        children: [{ path: ":categoryId/:videoId", element: <Video /> }],
      },
    ],
  },
  {
    path: "/login",
    element: <LogIn />,
  },
]);

function App() {
  return (
    <div>
      <ToastContainer theme="dark" />
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
