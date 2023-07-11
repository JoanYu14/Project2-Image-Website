import React, { useState } from "react";
import axios from "axios";

// 從props物件中取出searchImage與setInput函式(HomePage使用Search組件時給的)
const Search = ({ searchImage, setInput }) => {
  // 當input標籤被增減任何內容時都會觸發onChange事件，所以就會執行這個函式
  const inputHandler = (e) => {
    setInput(e.target.value); // 每當標籤被增減任何內容時都改變HomePage組件的Input這個state。
  };
  return (
    <div className="search">
      <input type="text" className="input" onChange={inputHandler} />
      <button onClick={searchImage}>Search</button>
    </div>
  );
};

export default Search;
