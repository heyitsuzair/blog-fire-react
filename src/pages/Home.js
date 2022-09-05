import React from "react";
import Hero from "../components/home/Hero";
import FeaturedPosts from "../components/home/FeaturedPosts";
import Innovation from "../components/home/Innovation";
import TrendingTopics from "../components/home/TrendingTopics";
import MostPopular from "../components/home/MostPopular";
import Social from "../components/home/Social";
export default function Home() {
  return (
    <div className="home">
      <Hero />
      <FeaturedPosts />
      <Innovation />
      <TrendingTopics />
      <MostPopular />
      <Social />
    </div>
  );
}
