import React from "react";
import { Container } from "@mui/system";
import PostContent from "./PostContent";
import Slider from "../commons/Slider";

export default function Hero() {
  return (
    <Container>
      <div className="hero">
        <Slider />
      </div>
      <div className="hero-context">
        <PostContent />
      </div>
    </Container>
  );
}
