import React from "react";
import img from "../../assets/img/thumbnail-01.webp";
import { Container } from "@mui/system";
import PostContent from "./PostContent";

export default function Hero() {
  return (
    <Container>
      <div className="hero">
        <img src={img} alt="Hero" />
      </div>
      <div className="hero-context">
        <PostContent />
      </div>
    </Container>
  );
}
