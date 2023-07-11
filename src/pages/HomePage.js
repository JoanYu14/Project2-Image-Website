import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import axios from "axios"; // 使用axios套件來對API寄出request
import Picture from "../components/Picture";

const HomePage = () => {
  const API_KEY = process.env.REACT_APP_KEY; // 在Pexels申請的API key
  let [data, setData] = useState(null); // data這個state要儲存圖片的資訊，一開始設定為null代表沒有任何東西
  let [input, setInput] = useState(""); // setInput這個function要傳給Search組件，因為我們希望input的值要等於Search組件內input標籤的value

  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15"; // page是第一頁，per_page是要拿到15張照片，這是取得精選圖片
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&page=1&per_page=15`; // query是要查詢的東西

  // 這個函式會被傳到Serch的props裡面當按鈕被按下時執行的function，也會在用在HomePage的useEffect內
  // 所以這個url要是被傳入的參數，點下按紐時傳入是搜尋圖片的URL，useEffect時傳入的是精選圖片的URL
  // 所以當serch按鈕按下時，HomePage組件data這個state就會被改變，HomePage就會重新渲染
  const searchImage = async (url) => {
    // 讓result存入Pexels傳回來的資料(一個物件)
    let result = await axios.get(url, { headers: { Authorization: API_KEY } }); // 這個給API KEY的方法是Pexels規定的
    setData(result.data.photos); // 設定data這個State的值為photos這個array(photos這個屬性的值微陣列，陣列中存有跟圖片相關的資訊)
  };

  // 因為要讓使用者在剛進網站就有精選圖片，所以我們要使用useEffect，第二個參數為空陣列的話，在HomePage第一次被渲染時就會執行第一個參數的函式
  useEffect(() => {
    // 這個searchImage()是HomePage剛渲染就執行的，所以會將data這個state由null變成一個陣列(result.data.photos)
    searchImage(initialURL);
  }, []);

  // 要把searchImage這個函式給Search組件，這樣在Search組件的按鈕被點擊時就會執行這個函數，改變HomePage組件的data這個State
  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        searchImage={() => {
          // Search組件在使用serchImage時，就是執行這個Arrow expression function
          // searchURL的內容是根據input這個state的值來決定的
          // 即使我們不給Serch在HomePage中input state的值他也能得到正確的URL的原因是Search組件在input標籤內增減內容時就會改變HomePage中input state
          // 而state被改變時HomePage就會重新渲染，但精選圖片沒改變的原因是那個useEffect的第二個參數是空陣列，只有在初次渲染時會執行，更新渲染時不會執行。
          searchImage(searchURL);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {
          // &&是邏輯運算子，如果用&&去幫兩個東西做比較的話，如果左邊是true就會運算出右邊的東西。如果左邊是false的話，就會運算出左邊的東西
          // data原本是null，null是一個Falsy Value，所以就會算出null，null在React中什麼東西都不會展示出來
          // 如果左邊有東西的話那就是Truthy Value，就會運算data.map這邊的程式
          data &&
            data.map((pic) => {
              // data陣列中每一個元素都是一個物件，每個物件都一張圖片的資料
              return <Picture data={pic} />;
            })
        }
      </div>
    </div>
  );
};

export default HomePage;
