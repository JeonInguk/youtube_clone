import React, { useState } from "react";

export default function Header() {
  const [typing, setTyping] = useState("");
  const handleTyping = (e) => {
    setTyping(e.target.value);
  };
  return (
    <>
      <div className="header_container">
        <img
          src="img/youtube_logo.png"
          alt="유튜브로고"
          className="logo"
          style={{ width: 300, height: 300 }}
        ></img>
        <form>
          <input type="text" value={typing} onChange={handleTyping}></input>
          <button>검색버튼</button>
        </form>
      </div>
    </>
  );
}
