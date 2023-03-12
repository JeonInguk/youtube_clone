import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import "./Home.css";
import { getHotTerendVideos } from "../../../youtubeAPI/YoutubeApi";

export default function Home({ videoId, setVideoId }) {
  const {
    isLoading,
    error,
    data: hotVideo,
  } = useQuery(["hotvideo"], getHotTerendVideos, {
    staleTime: 1000 * 60 * 5,
  });
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div className="homevideo_item_container">
      {hotVideo.items.map((video) => {
        return (
          <div className="homevideo_item">
            <Link to={`/detail/${video.id}`}>
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
