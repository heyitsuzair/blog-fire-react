import React from "react";
import { Bookmark } from "@mui/icons-material";
import img from "../../assets/img/author.webp";
import Drawer from "./Drawer";
import SearchComponent from "./Search";
export default function HeaderRight() {
  return (
    <>
      <SearchComponent />
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
