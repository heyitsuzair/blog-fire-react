import React from "react";
import { Search, Bookmark } from "@mui/icons-material";
import img from "../../assets/img/author.webp";
import Drawer from "./Drawer";
export default function HeaderRight() {
  return (
    <>
      <div className="search">
        <Search />
        <input type="text" name="search" id="search" placeholder="Search" />
      </div>
      <div className="header-icons">
        <Bookmark />
      </div>
      <div className="profile-pic">
        <img src={img} alt="Profile" />
      </div>
      <Drawer />
    </>
  );
}
