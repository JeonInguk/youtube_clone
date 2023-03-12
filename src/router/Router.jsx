import React, { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Header from "../conponent/layout/Header/Header";
import Detail from "../conponent/pages/Detail/Detail";
import Home from "../conponent/pages/Home/Home";
import Reserched from "../conponent/pages/Reserch/Reserched";
import { getReserchedVideos } from "../youtubeAPI/YoutubeApi";

export default function Router() {
  const [videoId, setVideoId] = useState("");
  const [typing, setTyping] = useState("");
  const queryClient = useQueryClient();
  const {
    isLoading,
    error,
    data: reserchedVideo,
  } = useQuery(
    ["reserchedvideo"],
    () => getReserchedVideos(typing),
    queryClient.invalidateQueries(["reserchedvideo"])
  );
  return (
    <>
      <BrowserRouter>
        <Header typing={typing} setTyping={setTyping} />
        <Routes>
          <Route
            path="/"
            element={<Home videoId={videoId} setVideoId={setVideoId} />}
          />
          <Route
            path="detail/:videoId"
            element={<Detail videoId={videoId} setVideoId={setVideoId} />}
          />
          <Route
            path="reserched"
            element={
              <Reserched
                isLoading={isLoading}
                error={error}
                reserchedVideo={reserchedVideo}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
