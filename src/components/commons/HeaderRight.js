import React from "react";
import { Bookmark } from "@mui/icons-material";
import Drawer from "./Drawer";
import SearchComponent from "./Search";
import Popover from "./Popover";
export default function HeaderRight() {
  return (
    <>
      <SearchComponent />
      <div className="header-icons">
        <Bookmark />
      </div>
      <Popover />
      <Drawer />
    </>
  );
}
