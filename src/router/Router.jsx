import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../conponent/pages/Detail";
import Home from "../conponent/pages/Home";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
