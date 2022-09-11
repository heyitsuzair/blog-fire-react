import React, { useContext, useEffect } from "react";
import Hero from "../components/home/Hero";
import FeaturedPosts from "../components/home/FeaturedPosts";
import Innovation from "../components/home/Innovation";
import TrendingTopics from "../components/home/TrendingTopics";
import MostPopular from "../components/home/MostPopular";
import Social from "../components/home/Social";
import PostList from "../components/commons/PostList";
import Footer from "../components/commons/Footer";
import Header from "../components/commons/Header";
import blogContext from "../context/blogContext";
import HeroSkeleton from "../components/home/HeroSkeleton";
export default function Home({ setProgress }) {
  // use the following context to get all blogs
  const blog_context = useContext(blogContext);
  const { gettingAllBlogs, blogs } = blog_context;

  useEffect(() => {
    gettingAllBlogs();
    setProgress(0);
    //eslint-disable-next-line
  }, []);

  // changing document title
  document.title = "Home";

  return (
    <>
      <Header />
      <div className="home">
        {blogs.length < 1 ? (
          <HeroSkeleton />
        ) : (
          <Hero blogs={blogs.slice(0, 2)} />
        )}
        <FeaturedPosts blogs={blogs.slice(0, 2)} />
        <Innovation />
        <TrendingTopics />
        <MostPopular />
        <Social />
        <PostList blogs={blogs} />
      </div>
      <Footer />
    </>
  );
}
