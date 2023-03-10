import React from "react";
import { useQuery } from "react-query";
import "./Reserched.css";

export default function Reserched() {
  const {
    isLoading,
    error,
    data: reserchedVideo,
  } = useQuery(
    ["reserchedvideo"],
    async () => {
      console.log("fetching...");
      return fetch(`data/list_by_keyword.json`).then((res) => res.json());
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;
  return (
    <div className="video_item_container">
      {reserchedVideo.items.map((video) => {
        return (
          <div className="video_item">
            <img
              className="reserchvideoitem"
              src={video.snippet.thumbnails.medium.url}
              alt="썸네일"
            ></img>
            <div className="reserched_content">
              <h2 className="title">{video.snippet.title}</h2>
              <h4 className="channeltitle">{video.snippet.channelTitle}</h4>
              <h6 className="publishedat">{video.snippet.publishedAt}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}
