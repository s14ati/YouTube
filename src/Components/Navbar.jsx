
import menu_icon from "../assets/menu.png";
import logo from "../assets/youtube-icon.png";
import search_icon from "../assets/search.png";
import upload_icon from "../assets/upload.png";
import more_icon from "../assets/more.png";
import notify_icon from "../assets/notification.png";
import profile_icon from "../assets/megan.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdOutlineCollections } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { LuDownload } from "react-icons/lu";
import { IoApps } from "react-icons/io5";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { FiPrinter } from "react-icons/fi";
import { TbApps } from "react-icons/tb";
import { CiShoppingTag } from "react-icons/ci";
import { PiSignOutLight } from "react-icons/pi";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Navbar({ setSideBar, sidebar }) {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  function menuItems() {
    setMenu(!menu);
  }
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const images = [
    { image: upload_icon },
    { image: more_icon },
    { image: notify_icon },
  ];

  function toggleSideBar() {
    setSideBar(!sidebar);
  }

  return (
    <nav className="w-full flex items-center px-[2%] py-[10px] justify-between shadow-lg bg-[#fff] sticky top-0 z-10">
      {/* Left: Menu + Logo */}
      <div className="flex items-center">
        <img
          src={menu_icon}
          onClick={toggleSideBar}
          className="cursor-pointer w-[22px] mr-[25px] max-[900px]:hidden"
        />
        <Link to={"/"}>
          <img
            src={logo}
            className="w-[130px] h-10 object-cover cursor-pointer max-[900px]:w-[90px]"
          />
        </Link>
      </div>

      {/* Middle: Search */}
      <div>
        <div className="flex items-center border border-[#ccc] mr-[15px] px-[12px] py-[8px] rounded-2xl">
          <input
            type="text"
            placeholder="Search"
            className="w-[400px] border-0 outline-0 bg-transparent max-[900px]:w-[100px]"
          />
          <img src={search_icon} className="cursor-pointer w-[15px]" />
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-5">
        {images.map((imgs, idx) => (
          <img
            src={imgs.image}
            key={idx}
            className="cursor-pointer w-[25px] max-[900px]:hidden"
            alt=""
          />
        ))}
        

        <div className="relative inline-block">
          <img
            src={profile_icon}
            onClick={menuItems}
            className="cursor-pointer w-[35px] rounded-full max-[900px]:block max-[900px]:w-[30px]"
            alt=""
          />

          {menu && (
            <div className="absolute -right-0 top-10 w-34 bg-gray-200 flex justify-center shadow-lg z-50">
              <ul className="py-2 text-gray-700">
                <li className="px-3 py-2 hover:bg-gray-100 hover:font-semibold cursor-pointer">
                  <MdOutlineCollections className="inline mr-3 font-semibold" />
                  Collection{" "}
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 hover:font-semibold cursor-pointer">
                  <MdHistory className="inline mr-3" />
                  History
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 hover:font-semibold cursor-pointer">
                  <LuDownload className="inline mr-3" />
                  Download
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 hover:font-semibold cursor-pointer">
                  <IoApps className="inline mr-3" />
                  Apps
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 hover:font-semibold cursor-pointer">
                  <IoExtensionPuzzleOutline className="inline mr-3" />
                  Extension
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 hover:font-semibold cursor-pointer">
                  <FiPrinter className="inline mr-3" />
                  Print
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 hover:font-semibold cursor-pointer">
                  <TbApps className="inline mr-3" />
                  Apps
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 hover:font-semibold cursor-pointer">
                  <CiShoppingTag className="inline mr-3" />
                  Shopping
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 hover:font-semibold cursor-pointer"
                  onClick={handleLogout}
                >
                  <PiSignOutLight className="inline mr-3" />
                  Sign Out
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
