import React from "react"
import Hero from "../components/home/Hero"
import FeaturedPosts from "../components/home/FeaturedPosts"
import Innovation from "../components/home/Innovation"
import TrendingTopics from "../components/home/TrendingTopics"
import MostPopular from "../components/home/MostPopular"
import Social from "../components/home/Social"
import PostList from "../components/home/PostList"
import Footer from "../components/commons/Footer"
import Header from "../components/commons/Header"
export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Hero />
        <FeaturedPosts />
        <Innovation />
        <TrendingTopics />
        <MostPopular />
        <Social />
        <PostList />
      </div>
      <Footer />
    </>
  )
}
