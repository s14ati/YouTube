import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_KEY } from "../data";
import { value_converter } from "../data";
import moment from "moment";

function Feed({ category }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const videoList_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;

      const response = await fetch(videoList_URL);
      const data = await response.json();
      setData(data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] mt-[15px] gap-x-[30px] gap-y-[16px]">
      {data.map((item, idx) => (
        <Link to={`video/${item.snippet.categoryId}/${item.id}`} key={idx}>
          <img src={item.snippet.thumbnails.medium.url} className=" rounded" />
          <h2 className="text-[16px] font-semibold text-[#000] mx-0 leading-4.5 my-[5px]">
            {item.snippet.title}
          </h2>
          <h3 className="text-[14px] font-semibold text-[#555] mx-0 my-[5px]">
            {item.snippet.channelTitle}
          </h3>
          <p className="text-[14px]">
            {value_converter(item.statistics.viewCount)} views ·{" "}
            {moment(item.snippet.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default Feed;
