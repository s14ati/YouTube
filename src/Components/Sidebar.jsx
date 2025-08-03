import React from "react";
import home from "../assets/home.png";
import game_icon from "../assets/game_icon.png";
import automobiles from "../assets/automobiles.png";
import sports from "../assets/sports.png";
import entertain from "../assets/entertainment.png";
import tech from "../assets/tech.png";
import music from "../assets/music.png";
import blogs from "../assets/blogs.png";
import news from "../assets/news.png";
import jack from "../assets/jack.png";
import simon from "../assets/simon.png";
import tom from "../assets/tom.png";
import megan from "../assets/megan.png";
import cameron from "../assets/cameron.png";

function Sidebar({ sidebar, category, setCategory }) {
  const images = [
    { image: jack, label: "PewDiePie" },
    { image: simon, label: "MrBeast" },
    { image: tom, label: "Justin Bieber" },
    { image: megan, label: "5-Minute Crafts" },
    { image: cameron, label: "Nas Daily" },
  ];
  return (
    <div
      className={`h-[100vh] fixed top-0 pl-[2%] pt-[80px] bg-white ${
        sidebar ? "w-[15%]" : "w-[5%]"
      } max-[900px]:hidden`}
    >
      <div className="">
        <div
          className={`flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${
            category === 0 ? "active" : ""
          }`}
          onClick={() => setCategory(0)}
        >
          <img
            src={home}
            className={`w-[20px] mr-[20px] ${
              category === 0 ? "border-b-2 border-red-500 pb-[2px]" : ""
            }`}
            alt=""
          />
          {sidebar && <p className="inline">Home</p>}
        </div>

        <div
          className={`flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${
            category === 20 ? "active" : ""
          }`}
          onClick={() => setCategory(20)}
        >
          <img
            src={game_icon}
            className={`w-[20px] mr-[20px] ${
              category === 20 ? "border-b-2 border-red-500 pb-[2px]" : ""
            }`}
            alt=""
          />
          {sidebar && <p className="inline">Gaming</p>}
        </div>

        <div
          className={`flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${
            category === 2 ? "active" : ""
          }`}
          onClick={() => setCategory(2)}
        >
          <img
            src={automobiles}
            className={`w-[20px] mr-[20px] ${
              category === 2 ? "border-b-2 border-red-500 pb-[2px]" : ""
            }`}
            alt=""
          />
          {sidebar && <p className="inline">Automobiles</p>}
        </div>

        <div
          className={`flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${
            category === 17 ? "active" : ""
          }`}
          onClick={() => setCategory(17)}
        >
          <img
            src={sports}
            className={`w-[20px] mr-[20px] ${
              category === 17 ? "border-b-2 border-red-500 pb-[2px]" : ""
            }`}
            alt=""
          />
          {sidebar && <p className="inline">Sports</p>}
        </div>

        <div
          className={`flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${
            category === 24 ? "active" : ""
          }`}
          onClick={() => setCategory(24)}
        >
          <img
            src={entertain}
            className={`w-[20px] mr-[20px] ${
              category === 24 ? "border-b-2 border-red-500 pb-[2px]" : ""
            }`}
            alt=""
          />
          {sidebar && <p className="inline">Entertainment</p>}
        </div>

        <div
          className={`flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${
            category === 28 ? "active" : ""
          }`}
          onClick={() => setCategory(28)}
        >
          <img
            src={tech}
            className={`w-[20px] mr-[20px] ${
              category === 28 ? "border-b-2 border-red-500 pb-[2px]" : ""
            }`}
            alt=""
          />
          {sidebar && <p className="inline">Technology</p>}
        </div>

        <div
          className={`flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${
            category === 10 ? "active" : ""
          }`}
          onClick={() => setCategory(10)}
        >
          <img
            src={music}
            className={`w-[20px] mr-[20px] ${
              category === 10 ? "border-b-2 border-red-500 pb-[2px]" : ""
            }`}
            alt=""
          />
          {sidebar && <p className="inline">Music</p>}
        </div>

        <div
          className={`flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${
            category === 22 ? "active" : ""
          }`}
          onClick={() => setCategory(22)}
        >
          <img
            src={blogs}
            className={`w-[20px] mr-[20px] ${
              category === 22 ? "border-b-2 border-red-500 pb-[2px]" : ""
            }`}
            alt=""
          />
          {sidebar && <p className="inline">Blogs</p>}
        </div>

        <div
          className={`flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${
            category === 25 ? "active" : ""
          }`}
          onClick={() => setCategory(25)}
        >
          <img
            src={news}
            className={`w-[20px] mr-[20px] ${
              category === 25 ? "border-b-2 border-red-500 pb-[2px]" : ""
            }`}
            alt=""
          />
          {sidebar && <p className="inline">News</p>}
        </div>

        <hr className="border-0 h-[1px] bg-[#ccc] w-[85%] mb-2" />
      </div>

      <div className="">
        {sidebar && (
          <h3 className="inline text-[13px] mx-0 my-[15px] text-[#5a5a5a] font-bold">
            Subscribed
          </h3>
        )}
        {images.map((item, idx) => (
          <div
            className="flex items-center mt-[10px] w-fit flex-wrap cursor-pointer"
            key={idx}
          >
            <img src={item.image} className="w-[25px] rounded-4xl mr-[20px]" />
            <p className={`${sidebar ? "inline text-[14px]" : "hidden"}`}>
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
