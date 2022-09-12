import React, { useContext, useEffect } from "react";
import { Bookmark } from "@mui/icons-material";
import Drawer from "./Drawer";
import SearchComponent from "./Search";
import Popover from "./Popover";
import bookmarkContext from "../../context/bookmarkContext";
import List from "./Lists";
import { Menu } from "@mui/icons-material";
import SidebarPost from "./SidebarPost";
import { Button } from "@mui/material";
import { toast } from "react-toastify";

export default function HeaderRight() {
  // getting all book marks from context
  const bookmark_context = useContext(bookmarkContext);
  // drawer state
  const [state, setState] = React.useState({
    left: false,
    right: false,
  });
  // bookmarks work start

  const { bookmarks, removeBookmark } = bookmark_context;

  // bookmarks work end

  // toggle drawer function
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  useEffect(() => {
    if (bookmarks === undefined) {
      return;
    }
    //eslint-disable-next-line
  }, [bookmarks]);

  return (
    <>
      <SearchComponent />
      {bookmarks.length > 0 ? (
        <div className="header-icons" onClick={toggleDrawer("right", true)}>
          {bookmarks.length}
        </div>
      ) : (
        <div
          className="header-icons"
          onClick={() => toast.warning("No Bookmarks Found!")}
        >
          <Bookmark />
        </div>
      )}
      <Popover />
      <div className="header-icons menu" onClick={toggleDrawer("left", true)}>
        <Menu />
      </div>
      {/* Drawer For Mobile */}
      <Drawer
        anchor={"left"}
        data={<List />}
        toggleDrawer={toggleDrawer}
        state={state}
        setState={setState}
      />
      {/* Drawer for bookmarks */}
      <Drawer
        anchor={"right"}
        data={bookmarks.map((blog, index) => {
          return (
            <div key={index}>
              <SidebarPost key={index} blog={blog} />
              <div className="remove-bookmark-btn">
                <Button
                  className="removeBookmark"
                  variant="contained"
                  onClick={() => removeBookmark(blog.id)}
                >
                  Remove Bookmark
                </Button>
              </div>
            </div>
          );
        })}
        toggleDrawer={toggleDrawer}
        state={state}
        setState={setState}
      />
    </>
  );
}
