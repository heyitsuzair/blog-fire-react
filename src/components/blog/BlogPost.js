import React, { useContext, useEffect } from "react";
import { Grid } from "@mui/material";
import { Interweave } from "interweave";
import FloatingBtn from "./FloatingBtn";
import bookmarkContext from "../../context/bookmarkContext";
import { BookmarkAdd, Link } from "@mui/icons-material";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

export default function BlogPost({ blog }) {
  // bookmark context
  const bookmark_context = useContext(bookmarkContext);
  const { addBookmark } = bookmark_context;

  // add to bookmark action
  const addToBookmark = () => {
    // calling "addBookmark" function available in bookmarkState.js
    addBookmark(blog);
  };

  // copy lint
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link Copied!");
  };

  // changing document title
  document.title = blog.title;

  useEffect(() => {
    setDoc(doc(db, "blogs", blog.id), {
      category: blog.category,
      content: blog.content,
      userInfo: blog.userInfo,
      image: blog.image,
      slug: blog.slug,
      status: blog.status,
      title: blog.title,
      views: parseInt(blog.views + 1),
      date: blog.date,
    });

    //eslint-disable-next-line
  }, [blog.slug]);

  return (
    <>
      <div className="float">
        <FloatingBtn
          action={addToBookmark}
          icon={<BookmarkAdd />}
          btnClass="primary"
          position="bottom-right"
        />
        <FloatingBtn
          action={copyLink}
          position="bottom-left"
          icon={<Link />}
          btnClass="secondary"
        />
      </div>
      <div className="blog-post">
        <div className="author">
          <Grid
            display="flex"
            justifyContent="space-between"
            className="author-inner"
            container
            gap={{ xs: 2 }}
          >
            <Grid item>
              <div className="by">
                <strong>Writer : </strong>
                <span>{blog.userInfo.name}</span>
              </div>
            </Grid>
            <Grid item>
              <div className="last-updated">
                <strong>Last Updated : </strong>
                <span>
                  {new Date(blog.date.seconds * 1000)
                    .getDate()
                    .toLocaleString() +
                    "/" +
                    parseInt(
                      new Date(blog.date.seconds * 1000).getMonth() + 1
                    ) +
                    "/" +
                    new Date(blog.date.seconds * 1000).getFullYear()}
                </span>
              </div>
            </Grid>
            <Grid item>
              <div className="status">
                <strong>Status : </strong>
                <span>{blog.status}</span>
              </div>
            </Grid>
            <Grid item>
              <div className="status">
                <strong>Views : </strong>
                <span>{blog.views + 1}</span>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="content">
          <div className="image">
            <img src={blog.image} alt="Loading..." className="img" />
          </div>
          <div className="category">
            <Grid
              container
              justifyContent={
                blog.category.length === 2 ? "flex-start" : "space-between"
              }
            >
              {blog.category.map((cat, index) => {
                return (
                  <Grid key={index} item lg={1.5} md={2} sm={2} xs={4}>
                    <span key={index}>{cat}</span>
                  </Grid>
                );
              })}
            </Grid>
          </div>
          <div className="title">
            <h3 className="hover-line">{blog.title}</h3>
          </div>
          <div className="markup">
            <Interweave content={blog.content} />
          </div>
        </div>
      </div>
    </>
  );
}
