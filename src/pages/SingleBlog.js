import React, { useEffect, useContext, useState } from "react";
import Footer from "../components/commons/Footer";
import Header from "../components/commons/Header";
import blogContext from "../context/blogContext";
import { Grid, Container } from "@mui/material";
import Sidebar from "../components/commons/Sidebar";
import BlogPost from "../components/blog/BlogPost";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import Spinner from "../components/commons/Spinner";

export default function Blog({ setProgress }) {
  // purpose:get all blogs to render in sidebar
  const blog_context = useContext(blogContext);
  const { gettingAllBlogs, blogs } = blog_context;

  // get the incoming slug and retrieve the blog info from db
  const { slug } = useParams();

  // blog reference
  const blogRef = collection(db, "blogs");

  // use the following state to store blog info
  const [blogInfo, setBlogInfo] = useState([]);

  // loading state
  const [loading, setLoading] = useState(true);

  const getBlogInfo = async (slug) => {
    // Create a query against the collection.
    const blogQuery = query(blogRef, where("slug", "==", slug));

    // executing query
    const blogSnapshot = await getDocs(blogQuery);
    setBlogInfo(
      blogSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    setProgress(100);
    setLoading(false);
  };

  useEffect(() => {
    gettingAllBlogs();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    setProgress(0);
    setProgress(50);
    setLoading(true);
    setProgress(70);
    getBlogInfo(slug);
    //eslint-disable-next-line
  }, [slug]);

  return (
    <>
      <Header />
      <div className="blog">
        <Container sx={{ maxWidth: "1280px !important" }}>
          <Grid container columnSpacing={{ lg: 3, md: 0 }}>
            <Grid item lg={8} md={12} sm={12} xs={12}>
              {loading === true ? (
                <div className="blog-post">
                  <Spinner />
                </div>
              ) : (
                <BlogPost blog={blogInfo[0]} />
              )}
            </Grid>
            <Grid item lg={4} md={12} sm={12} xs={12}>
              <Sidebar
                blogs={blogs.sort(() => Math.random() - 0.5).slice(0, 4)}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </>
  );
}
