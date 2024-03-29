import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import "./Reserched.css";
import { getReserchedVideos } from "../../../youtubeAPI/YoutubeApi";

export default function Reserched({ typing, refetching, setTyping }) {
  const {
    isLoading,
    error,
    data: reserchedVideo,
    refetch,
  } = useQuery(["reserchedvideo"], () => getReserchedVideos(typing), {
    staleTime: 1000 * 60 * 5,
  });
  useEffect(() => {
    refetch();
    setTyping("");
  }, [refetching]);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div className="video_item_container">
      {reserchedVideo &&
        reserchedVideo.items.map((video) => {
          return (
            <div className="video_item">
              <Link to={`/detail/${video.id.videoId}`}>
                <img
                  className="reserchvideoitem"
                  src={video.snippet.thumbnails.medium.url}
                  alt="썸네일"
                ></img>
              </Link>
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
