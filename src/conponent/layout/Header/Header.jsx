import React, { useState } from "react";
import "./Header.css";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";
import { QueryClient, useQueryClient } from "react-query";

export default function Header({ typing, setTyping }) {
  const queryClient = useQueryClient();
  const handleTyping = (e) => {
    setTyping(e.target.value);
  };
  const handleMutation = () => {
    queryClient.invalidateQueries(["reserchedvideo"]);
  };
  return (
    <>
      <span className="header_container">
        <Link to={`/`}>
          <img
            src="img/youtube_logo.png"
            alt="유튜브로고"
            className="logo"
            onClick={handleMutation}
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
            <button className="header_button">
              <HiMagnifyingGlass size="25" />
            </button>
          </Link>
        </form>
      </span>
    </>
  );
}
