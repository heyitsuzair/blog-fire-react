import React from "react";
import { Search } from "@mui/icons-material";
export default function SearchComponent() {
  return (
    <div className="search">
      <Search />
      <input type="text" name="search" id="search" placeholder="Search" />
    </div>
  );
}
