import React from "react";
import Hero from "../components/home/Hero";
import FeaturedPosts from "../components/home/FeaturedPosts";
import Innovation from "../components/home/Innovation";
export default function Home() {
  return (
    <div className="home">
      <Hero />
      <FeaturedPosts />
      <Innovation />
    </div>
  );
}
