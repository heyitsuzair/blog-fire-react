import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/commons/Footer";
import Header from "../components/commons/Header";
import PostList from "../components/commons/PostList";
import blogContext from "../context/blogContext";
import { Container } from "@mui/system";
import Sidebar from "../components/commons/Sidebar";
import { Grid } from "@mui/material";
import Spinner from "../components/commons/Spinner";
export default function Search({ setProgress }) {
  // parsed blog state
  const [parsedBlog, setParsedBlog] = useState([]);

  // purpose:to get all blogs in db
  const blog_context = useContext(blogContext);
  const { gettingAllBlogs, blogs } = blog_context;

  // loading state
  const [loading, setLoading] = useState(true);

  // incoming string to search
  const { string } = useParams();

  // changing document title
  document.title = "Search - " + string;

  const search = (stringIncoming) => {
    // filtering from all the availble blogs
    const searchedData = blogs.filter((blog) => {
      return (
        blog.title.includes(stringIncoming) ||
        blog.content.includes(stringIncoming)
      );
    });
    setProgress(100);
    setProgress(0);
    // setting found blogs to "parsedBlog" state
    setParsedBlog(searchedData);
    setLoading(false);
  };

  useEffect(() => {
    gettingAllBlogs();
    //eslint-disable-next-line
  }, [string]);

  useEffect(() => {
    setLoading(true);
    setProgress(30);
    search(string);
    //eslint-disable-next-line
  }, [blogs, string]);

  return (
    <>
      <Header />
      <div className="blog">
        {loading === true ? (
          <Container sx={{ maxWidth: "1280px !important" }}>
            <Grid container columnSpacing={{ lg: 3, md: 0 }}>
              <Grid item lg={8} md={12} sm={12} xs={12}>
                <div className="no-result-spinner">
                  <Spinner />
                </div>
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <Sidebar
                  blogs={blogs.slice(0, 4).sort(() => Math.random() - 0.5)}
                />
              </Grid>
            </Grid>
          </Container>
        ) : parsedBlog.length < 1 ? (
          <Container sx={{ maxWidth: "1280px !important" }}>
            <Grid container columnSpacing={{ lg: 3, md: 0 }}>
              <Grid item lg={8} md={12} sm={12} xs={12}>
                <div className="no-result">
                  <span>
                    No Results Found For " <strong>{string}</strong> "
                  </span>
                </div>
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <Sidebar
                  blogs={blogs.slice(0, 4).sort(() => Math.random() - 0.5)}
                />
              </Grid>
            </Grid>
          </Container>
        ) : (
          <PostList blogs={parsedBlog} />
        )}
      </div>
      <Footer />
    </>
  );
}
