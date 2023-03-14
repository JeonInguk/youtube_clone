import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Header from "../conponent/layout/Header/Header";
import Detail from "../conponent/pages/Detail/Detail";
import Home from "../conponent/pages/Home/Home";
import Reserched from "../conponent/pages/Reserch/Reserched";

export default function Router() {
  const [videoId, setVideoId] = useState("");
  const [typing, setTyping] = useState("");
  const [refetching, setRefetching] = useState("");
  const army = refetching;
  console.log(army);
  return (
    <>
      <BrowserRouter>
        <Header
          typing={typing}
          setTyping={setTyping}
          setRefetching={setRefetching}
        />
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
                typing={typing}
                refetch={refetching}
                army={army}
                setRefetching={setRefetching}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
