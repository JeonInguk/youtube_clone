import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import "./Detail.css";

export default function Detail({ videoId, setVideoId }) {
  const param = useParams();
  return (
    <div className="video_item_container">
      <div className="clickedvideo_item">
        <iframe
          className="videoframe"
          src={`https://www.youtube.com/embed/${param.videoId}`}
          allowFullScreen
        ></iframe>
        <div className="clicked_content">
          {/* <h2 className="title">{video.snippet.title}</h2>
          <h4 className="channeltitle">{video.snippet.localized.title}</h4>
          <h4 className="description">{video.snippet.description}</h4> */}
        </div>
      </div>
    </div>
  );
}
