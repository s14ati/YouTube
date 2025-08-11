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
      <div>
        <div
          className={`group relative flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${
            sidebar && category === 0 ? "bg-gray-200 font-semibold w-full" : ""
          }`}
          onClick={() => setCategory(0)}
        >
          <img
            src={home}
            className={`w-[20px] mr-[20px] ${
              !sidebar && category === 0 ? "bg-gray-200" : ""
            }
              ${category === 0 ? "border-b-2 border-red-500 pb-[2px] " : ""} 
            }`}
            alt=""
          />
          <p
            className={`whitespace-nowrap ${
              sidebar
                ? "inline"
                : "absolute left-5 text-[12px] px-1 py-1 hidden group-hover:block bg-white "
            }`}
          >
            Home
          </p>
        </div>

        <div
          className={`group relative flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${
            sidebar && category === 20 ? "bg-gray-200 font-semibold w-full" : ""
          }`}
          onClick={() => setCategory(20)}
        >
          <img
            src={game_icon}
            className={`w-[20px] mr-[20px] ${
              !sidebar && category === 20 ? "bg-gray-200" : ""
            }
              ${category === 20 ? "border-b-2 border-red-500 pb-[2px]" : ""}
            }`}
            alt=""
          />
          <p
            className={`whitespace-nowrap ${
              sidebar
                ? "inline"
                : "absolute left-5 text-[12px] px-1 py-1 hidden group-hover:block bg-white "
            }`}
          >
            Gaming
          </p>
        </div>

        <div
          className={`group relative flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${
            sidebar && category === 2 ? "bg-gray-200 font-semibold w-full" : ""
          }`}
          onClick={() => setCategory(2)}
        >
          <img
            src={automobiles}
            className={`w-[20px] mr-[20px] ${
              !sidebar && category === 2 ? "bg-gray-200" : ""
            }
              ${category === 2 ? "border-b-2 border-red-500 pb-[2px]" : ""}
            }`}
            alt=""
          />
          <p
            className={`whitespace-nowrap ${
              sidebar
                ? "inline"
                : "absolute left-5 text-[12px] px-1 py-1 hidden group-hover:block bg-white "
            }`}
          >
            Automobiles
          </p>
        </div>

        <div
          className={`group relative flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${
            sidebar && category === 17 ? "bg-gray-200 font-semibold w-full" : ""
          }`}
          onClick={() => setCategory(17)}
        >
          <img
            src={sports}
            className={`w-[20px] mr-[20px] ${
              !sidebar && category === 17 ? "bg-gray-200" : ""
            }
              ${category === 17 ? "border-b-2 border-red-500 pb-[2px]" : ""}
            }`}
            alt=""
          />
          <p
            className={`whitespace-nowrap ${
              sidebar
                ? "inline"
                : "absolute left-5 text-[12px] px-1 py-1 hidden group-hover:block bg-white "
            }`}
          >
            Sports
          </p>
        </div>

        <div
          className={`group relative flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${
            sidebar && category === 24 ? "bg-gray-200 font-semibold w-full" : ""
          }`}
          onClick={() => setCategory(24)}
        >
          <img
            src={entertain}
            className={`w-[20px] mr-[20px] ${
              !sidebar && category === 24 ? "bg-gray-200" : ""
            }
              ${category === 24 ? "border-b-2 border-red-500 pb-[2px]" : ""}
            }`}
            alt=""
          />
          <p
            className={`whitespace-nowrap ${
              sidebar
                ? "inline"
                : "absolute left-5 text-[12px] px-1 py-1 hidden group-hover:block bg-white "
            }`}
          >
            Entertainment
          </p>
        </div>

        <div
          className={`group relative flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${
            sidebar && category === 28 ? "bg-gray-200 font-semibold w-full" : ""
          }`}
          onClick={() => setCategory(28)}
        >
          <img
            src={tech}
            className={`w-[20px] mr-[20px] ${
              !sidebar && category === 28 ? "bg-gray-200" : ""
            }
              ${category === 28 ? "border-b-2 border-red-500 pb-[2px]" : ""}
            }`}
            alt=""
          />
          <p
            className={`whitespace-nowrap ${
              sidebar
                ? "inline"
                : "absolute left-5 text-[12px] px-1 py-1 hidden group-hover:block bg-white "
            }`}
          >
            Technology
          </p>
        </div>

        <div
          className={`group relative flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${
            sidebar && category === 10 ? "bg-gray-200 font-semibold w-full" : ""
          }`}
          onClick={() => setCategory(10)}
        >
          <img
            src={music}
            className={`w-[20px] mr-[20px] ${
              !sidebar && category === 10 ? "bg-gray-200" : ""
            }
              ${category === 10 ? "border-b-2 border-red-500 pb-[2px]" : ""}
            }`}
            alt=""
          />
          <p
            className={`whitespace-nowrap ${
              sidebar
                ? "inline"
                : "absolute left-5 text-[12px] px-1 py-1 hidden group-hover:block bg-white "
            }`}
          >
            Music
          </p>
        </div>

        <div
          className={`group relative flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${
            sidebar && category === 22 ? "bg-gray-200 font-semibold w-full" : ""
          }`}
          onClick={() => setCategory(22)}
        >
          <img
            src={blogs}
            className={`w-[20px] mr-[20px] ${
              !sidebar && category === 22 ? "bg-gray-200" : ""
            }
              ${category === 22 ? "border-b-2 border-red-500 pb-[2px]" : ""}
            }`}
            alt=""
          />
          <p
            className={`whitespace-nowrap ${
              sidebar
                ? "inline"
                : "absolute left-5 text-[12px] px-1 py-1 hidden group-hover:block bg-white "
            }`}
          >
            Blogs
          </p>
        </div>

        <div
          className={`group relative flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${
            sidebar && category === 25 ? "bg-gray-200 font-semibold w-full" : ""
          }`}
          onClick={() => setCategory(25)}
        >
          <img
            src={news}
            className={`w-[20px] mr-[20px] ${
              !sidebar && category === 25 ? "bg-gray-200" : ""
            }
              ${category === 25 ? "border-b-2 border-red-500 pb-[2px]" : ""}
            }`}
            alt=""
          />
          <p
            className={`whitespace-nowrap ${
              sidebar
                ? "inline"
                : "absolute left-5 text-[12px] px-1 py-1 hidden group-hover:block bg-white "
            }`}
          >
            News
          </p>
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
