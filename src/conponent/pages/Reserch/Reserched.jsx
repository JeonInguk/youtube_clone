import React, { useEffect } from "react";
import { QueryClient, useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import "./Reserched.css";
import { getReserchedVideos } from "../../../youtubeAPI/YoutubeApi";

export default function Reserched({ typing, refetching, setRefetching, army }) {
  const queryClient = useQueryClient();
  const {
    isLoading,
    error,
    data: reserchedVideo,
    refetch,
  } = useQuery(["reserchedvideo"], () => getReserchedVideos(typing));
  // console.log(typing);
  // console.log(refetching);
  console.log(army);

  useEffect(() => {
    console.log(1);
    queryClient.invalidateQueries(["reserchedvideo"]);
    refetch();
  }, [army]);

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
