import React, { useEffect, useContext } from "react";
import Footer from "../components/commons/Footer";
import Header from "../components/commons/Header";
import PostList from "../components/commons/PostList";

import blogContext from "../context/blogContext";

export default function Blog({ setProgress }) {
  const blog_context = useContext(blogContext);
  const { gettingAllBlogs, blogs } = blog_context;

  useEffect(() => {
    setProgress(0);
    setProgress(50);
    gettingAllBlogs();
    setProgress(100);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <div className="blog">
        <PostList blogs={blogs} />
      </div>
      <Footer />
    </>
  );
}
