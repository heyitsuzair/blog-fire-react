import React from "react";
import { Container } from "@mui/system";
import PostContent from "./PostContent";
import Slider from "../commons/Slider";

export default function Hero({ blogs }) {
  console.log(blogs);
  return (
    <Container sx={{ maxWidth: "1280px !important" }}>
      <div className="hero">
        <Slider blogs={blogs} />
      </div>
      <div className="hero-context">
        <PostContent blogs={blogs} />
      </div>
    </Container>
  );
}
