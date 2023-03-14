import React, { useEffect, useState } from "react";
import "./Header.css";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getReserchedVideos } from "../../../youtubeAPI/YoutubeApi";

export default function Header({ typing, setTyping, setRefetching }) {
  const handleTyping = (e) => {
    setTyping(e.target.value);
  };
  const handleRefetch = () => {
    setRefetching(Math.random());
  };
  return (
    <>
      <span className="header_container">
        <Link to={`/`}>
          <img
            src="img/youtube_logo.png"
            alt="유튜브로고"
            className="logo"
          ></img>
        </Link>
        <form className="header_form">
          <input
            className="header_input"
            type="text"
            placeholder="검색"
            value={typing}
            onChange={handleTyping}
          ></input>
          <Link to={`/reserched`}>
            <button className="header_button" onClick={handleRefetch}>
              <HiMagnifyingGlass size="25" />
            </button>
          </Link>
        </form>
      </span>
    </>
  );
}
