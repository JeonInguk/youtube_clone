import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import "./Detail.css";
import { getRelatedVideos } from "../../../API/youtube_api";

export default function Detail({ videoId, setVideoId }) {
  const param = useParams();
  const {
    isLoading,
    error,
    data: relatedVideo,
  } = useQuery(["realtedvideo"], () => getRelatedVideos(param.videoId), {
    staleTime: 1000 * 60 * 5,
  });
  return (
    <div className="videos_item_container">
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
      <div className="relatedVideos_container">
        {relatedVideo &&
          relatedVideo.items.map((videos) => {
            return (
              <div className="relatedVideo_container">
                <img
                  className="item"
                  src={videos.snippet.thumbnails.medium.url}
                  alt="썸네일"
                ></img>
                <div className="related_content">
                  <h3 className="title">{videos.snippet.title}</h3>
                  <h5 className="channeltitle">
                    {videos.snippet.channelTitle}
                  </h5>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
