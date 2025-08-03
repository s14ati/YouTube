import React, { useState, useEffect } from "react";
import { API_KEY, value_converter } from "../data";
import { Link } from "react-router-dom";

function Recommended({ categoryId }) {
  const [apiData, setApiData] = useState([]);
  const fetchData = async () => {
    const relatedVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videocategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(relatedVideoUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="basis-[30%] max-[900px]:basis-full">
  {apiData?.map((item, idx) => (
    <Link
      to={`/video/${item.snippet.categoryId}/${item.id}`}
      key={idx}
      className="flex flex-row max-[900px]:flex-col gap-2 mb-4"
    >
      <img
        src={item.snippet.thumbnails.medium.url}
        className="w-[50%] max-[900px]:w-full"
      />
      <div className="w-[50%] max-[900px]:w-full">
        <h4 className="text-[14px] mb-[5px] font-semibold leading-4 line-clamp-2">
          {item.snippet.title}
        </h4>
        <p className="text-sm text-gray-600">{item.snippet.channelTitle}</p>
        <p className="text-sm text-gray-500">
          {value_converter(item.statistics.viewCount)} Views
        </p>
      </div>
    </Link>
  ))}
</div>
  );
}

export default Recommended;
