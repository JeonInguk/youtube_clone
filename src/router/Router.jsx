import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../conponent/layout/Header/Header";
import Detail from "../conponent/pages/Detail/Detail";
import Home from "../conponent/pages/Home/Home";
import Reserched from "../conponent/pages/Reserch/Reserched";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail" element={<Detail />} />
          <Route path="reserched" element={<Reserched />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
