import React from "react";
import { useQuery } from "react-query";
import "./Detail.css";

export default function Detail() {
  const {
    isLoading,
    error,
    data: clickedVideo,
  } = useQuery(
    ["clickedvideo"],
    async () => {
      console.log("fetching...");
      return fetch(`data/channel_detail.json`).then((res) => res.json());
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div className="video_item_container">
      {clickedVideo.items.map((video) => {
        return (
          <div className="clickedvideo_item">
            <img
              className="clickedvideoimg"
              src={video.snippet.thumbnails.high.url}
              alt="썸네일"
            ></img>
            <div className="clicked_content">
              <h1 className="title">{video.snippet.title}</h1>
              <h4 className="channeltitle">{video.snippet.channelTitle}</h4>
              <h4 className="description">{video.snippet.description}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}
