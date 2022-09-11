import React, { useContext } from "react";
import { Bookmark } from "@mui/icons-material";
import Drawer from "./Drawer";
import SearchComponent from "./Search";
import Popover from "./Popover";
import bookmarkContext from "../../context/bookmarkContext";
export default function HeaderRight() {
  // getting all book marks from context
  const bookmark_context = useContext(bookmarkContext);
  const { bookmarks } = bookmark_context;

  if (bookmarks === undefined) {
    return;
  }

  return (
    <>
      <SearchComponent />
      {bookmarks.length > 0 ? (
        <div className="header-icons">{bookmarks.length}</div>
      ) : (
        <div className="header-icons">
          <Bookmark />
        </div>
      )}

      <Popover />
      <Drawer />
    </>
  );
}
