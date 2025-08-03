import React from "react";
import menu_icon from "../assets/menu.png";
import logo from "../assets/youtube-icon.png";
import search_icon from "../assets/search.png";
import upload_icon from "../assets/upload.png";
import more_icon from "../assets/more.png";
import notify_icon from "../assets/notification.png";
import profile_icon from "../assets/megan.png";
import { Link } from "react-router-dom";

function Navbar({ setSideBar, sidebar }) {
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
          className="menu-icon cursor-pointer w-[22px] mr-[25px] max-[900px]:hidden"
        />
        <Link to={"/"}>
          <img
            src={logo}
            className="logo w-[130px] h-10 object-cover cursor-pointer max-[900px]:w-[90px]"
          />
        </Link>
      </div>

      {/* Middle: Search */}
      <div className="nav-middle">
        <div className="search-box flex items-center border border-[#ccc] mr-[15px] px-[12px] py-[8px] rounded-2xl">
          <input
            type="text"
            placeholder="Search"
            className="w-[400px] border-0 outline-0 bg-transparent max-[900px]:w-[100px]"
          />
          <img src={search_icon} className="cursor-pointer w-[15px]" />
        </div>
      </div>

      {/* Right Icons */}
      <div className="nav-right flex items-center gap-5">
        {images.map((imgs, idx) => (
          <img
            src={imgs.image}
            key={idx}
            className="cursor-pointer w-[25px] max-[900px]:hidden"
            alt=""
          />
        ))}
        <img
          src={profile_icon}
          className="user-icon cursor-pointer w-[35px] rounded-full max-[900px]:block max-[900px]:w-[30px]"
          alt=""
        />
      </div>
    </nav>
  );
}

export default Navbar;
