import React from "react";
import Hero from "../components/home/Hero";
import FeaturedPosts from "../components/home/FeaturedPosts";
export default function Home() {
  return (
    <div className="home">
      <Hero />
      <FeaturedPosts />
    </div>
  );
}
