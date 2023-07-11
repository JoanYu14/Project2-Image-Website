// Layout.js首先要從react-router-dom這個package裡面import 1.Outlet 2.Link
// 在Layout component裡面的a標籤要改成Link標籤，標籤內的href要改成to。
import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";

// <Outlet />標籤會自動在<Route element={Layout}>下的其他<Route>標籤設定的element設定的組件自動取代。
const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">首頁</Link>
          </li>
          <li>
            <Link to="about">關於這個網站</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
