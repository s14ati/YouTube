import React, { useState, useEffect } from "react";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import { API_KEY, value_converter } from "../data";
import moment from "moment";
import { useParams } from "react-router-dom";

function PlayVideo() {
  const { videoId } = useParams();
  const [apiData, setApiData] = useState(null); // changed to null
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchVideoData = async () => {
    const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;

    try {
      const res = await fetch(videoDetailsUrl);
      const data = await res.json();
      if (data.items && data.items.length > 0) {
        setApiData(data.items[0]);
      }
    } catch (err) {
      console.error("Failed to fetch video data", err);
    }
  };

  const fetchChannelData = async (channelId) => {
    const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`;
    const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;

    try {
      const res1 = await fetch(channelDataUrl);
      const data1 = await res1.json();
      if (data1.items && data1.items.length > 0) {
        setChannelData(data1.items[0]);
      }

      const res2 = await fetch(commentUrl);
      const data2 = await res2.json();
      if (data2.items) {
        setCommentData(data2.items);
      }
    } catch (err) {
      console.error("Failed to fetch channel or comments", err);
    }
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    if (apiData?.snippet?.channelId) {
      fetchChannelData(apiData.snippet.channelId);
    }
  }, [apiData]);

  return (
    <div className="basis-[69%] w-full">
      <iframe
        className="w-full h-[37vw]"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <h3 className="mt-[10px] font-semibold text-[22px]">
        {apiData?.snippet?.title || "Title Here"}
      </h3>

      <div className="flex items-center justify-between flex-wrap mt-[10px] text-[14px] text-[#5a5a5a]">
        <p>
          {value_converter(apiData?.statistics?.viewCount || 0)} Views &bull;{" "}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span className="inline-flex items-center ml-[15px]">
            <img className="w-[20px] mr-[8px]" src={like} alt="" />
            {value_converter(apiData?.statistics?.likeCount || 0)}
          </span>
          <span className="inline-flex items-center ml-[15px]">
            <img className="w-[20px] mr-[8px]" src={dislike} alt="" />2
          </span>
          <span className="inline-flex items-center ml-[15px]">
            <img className="w-[20px] mr-[8px]" src={share} alt="" />
            Share
          </span>
          <span className="inline-flex items-center ml-[15px]">
            <img className="w-[20px] mr-[8px]" src={save} alt="" />
            Save
          </span>
        </div>
      </div>

      <hr className="border-0 h-[1px] bg-[#ccc] mx-0 my-[10px]" />

      <div className="flex items-center mt-[20px]">
        <img
          src={channelData?.snippet?.thumbnails?.default?.url || ""}
          className="w-[40px] rounded-4xl mr-[15px]"
          alt=""
        />
        <div className="flex-1 leading-[18px]">
          <p className="text-[#000] font-semibold text-[18px]">
            {apiData?.snippet?.channelTitle || ""}
          </p>
          <span className="text-[13px] text-[#5a5a5a]">
            {value_converter(channelData?.statistics?.subscriberCount || 0)}{" "}
            Subscribers
          </span>
        </div>
        <button className="bg-red-600 text-white px-[30px] py-[8px] border-0 outline-0 rounded cursor-pointer">
          Subscribe
        </button>
      </div>

      <div className="pl-[55px] mx-0 my-[15px]">
        {/* <p>comments</p> */}
        <p className="text-[15px] mb-[5px] text-[#5a5a5a] leading-5">
          {apiData?.snippet?.description?.slice(0, 400) || "Description Here"}
        </p>
        <hr className="border-0 h-[1px] bg-gray-300 mx-0 my-[10px]" />
        <h4 className="text-[14px] text-[#5a5a5a] mt-[15px] font-semibold ">
          {value_converter(apiData?.statistics?.commentCount || 0)} Comments
        </h4>

        {commentData?.map((item, idx) => (
          <div className="flex items-start mx-0 my-[20px]" key={idx}>
            <img
              src={
                item.snippet?.topLevelComment?.snippet?.authorProfileImageUrl ||
                ""
              }
              className="w-[35px] rounded-4xl mr-[15px]"
              alt=""
            />
            <div>
              <h3 className="text-[14px] mb-[2px] font-bold mt-2">
                {item.snippet?.topLevelComment?.snippet?.authorDisplayName ||
                  ""}{" "}
                <span className="text-[12px] text-gray-400 font-semibold ml-[8px]">
                  1 day ago
                </span>
              </h3>
              <p className="text-[14px] text-[#5a5a5a] -mt-1">
                {item.snippet?.topLevelComment?.snippet?.textDisplay || ""}
              </p>
              <div className="flex items-center mx-0 my-[8px] text-[14px] mt-1">
                <img className="rounded-0 w-[20px] mr-[5px]" src={like} />
                <span className="mr-[20px] text-gray-500">
                  {value_converter(
                    item.snippet?.topLevelComment?.snippet?.likeCount || 0
                  )}
                </span>
                <img src={dislike} className="rounded-0 w-[20px] mr-[5px]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayVideo;
