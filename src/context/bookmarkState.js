import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import bookmarkContext from "./bookmarkContext";

export default function ModeState({ children }) {
  // bookmarks state
  const [bookmarks, setBookmarks] = useState([]);

  // function to add blog to bookmark
  const addBookmark = (blog) => {
    console.log(bookmarks);
    // check if the incoming blog is already in bookmark than show warning else add to bookmark
    const checkIfexists = Array.isArray(bookmarks)
      ? bookmarks.filter((item) => {
          return item.id === blog.id;
        })
      : "";

    if (checkIfexists.length < 1) {
      //   console.log(blog);
      //   return;
      setBookmarks(bookmarks.concat(blog));
      localStorage.setItem(
        "blog-bookmarks",
        JSON.stringify(bookmarks.concat(blog))
      );
      toast.success("Bookmark Added!");
    } else {
      toast.warning("Bookmark Already Exists!");
      return;
    }
  };

  // function to remove bookmarked blog
  const removeBookmark = (blogId) => {
    const filteredBookmarks = bookmarks.filter((bookmark) => {
      return bookmark.id !== blogId;
    });
    // changing in state
    setBookmarks(filteredBookmarks);
    // changing in local storage
    localStorage.setItem("blog-bookmarks", JSON.stringify(filteredBookmarks));
  };

  useEffect(() => {
    // set the default theme mode got from localStorage mode item
    setBookmarks(
      JSON.parse(localStorage.getItem("blog-bookmarks")) === null
        ? []
        : JSON.parse(localStorage.getItem("blog-bookmarks"))
    );
    //eslint-disable-next-line
  }, []);

  return (
    <bookmarkContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark }}
    >
      {children}
    </bookmarkContext.Provider>
  );
}
