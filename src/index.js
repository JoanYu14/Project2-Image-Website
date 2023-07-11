// index.js文件的功能是，將最主要的React Component(App Component)渲染到在index.html當中id為root的標籤。
import React from "react"; // 與const React = require("react") 是一模一樣的
import ReactDOM from "react-dom/client"; // 引入用npm載下來的ReactDOM
import App from "./App";

// 用getElementById曲拿到我們在index.html裡面的那個id為root的div element，然後叫做root
// React 將為root這個div創建一個Root，並接管管理其中的 DOM。創建root後，您需要調用root.render以顯示其中的 React 組件
const root = ReactDOM.createRoot(document.getElementById("root"));

// root會去執行一個method叫做.render，.render就會去顯示App這個componentid在id為root的div裡面
// App是從app.js取得的，app.js會製作一個App Component，App Component的功能是擔任其他所有Component的容器。
// root.render要渲染一個component可以直接用標籤的形式
// <React.StrictMode>是指我們要用嚴謹的React語法
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
