// App.js文件的功能是，製作「App Component」。 App Component的功能是擔任其他所有Component的容器。
// 因為React製作出的網站是一頁式的網頁，所以網頁內容會根據URL改變。根據不同的URL去做相對應的route是App.js的責任。
import React, { useState } from "react";

// Create React App 並不自動包含page routing的功能，所以最解決方案是使用 react-router-dom這個package。
// 從react-router-dom這個package裡面import 1.BrowserRouter 2.Routes 3.Route
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Page404 from "./pages/Page404";
import "./styles/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
