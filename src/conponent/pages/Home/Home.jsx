import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const {
    isLoading,
    error,
    data: hotVideo,
  } = useQuery(
    ["hotvideo"],
    async () => {
      console.log("fetching...");
      return fetch(`data/hot_trend_video.json`).then((res) => res.json());
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div className="homevideo_item_container">
      {hotVideo.items.map((video) => {
        return (
          <div className="homevideo_item">
            <Link>
              <img
                className="hotvideoitem"
                src={video.snippet.thumbnails.medium.url}
                alt="썸네일"
              ></img>
            </Link>
            <h4>{video.snippet.title}</h4>
            <h6>{video.snippet.channelTitle}</h6>
            <h6>{video.snippet.publishedAt}</h6>
          </div>
        );
      })}
    </div>
  );
}
