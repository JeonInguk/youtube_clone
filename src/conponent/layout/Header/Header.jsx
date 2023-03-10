import React, { useState } from "react";
import "./Header.css";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function Header() {
  const [typing, setTyping] = useState("");
  const handleTyping = (e) => {
    setTyping(e.target.value);
  };
  return (
    <>
      <span className="header_container">
        <img src="img/youtube_logo.png" alt="유튜브로고" className="logo"></img>
        <form className="header_form">
          <input
            className="header_input"
            type="text"
            placeholder="검색"
            value={typing}
            onChange={handleTyping}
          ></input>
          <button className="header_button">
            <HiMagnifyingGlass size="25" />
          </button>
        </form>
      </span>
    </>
  );
}
