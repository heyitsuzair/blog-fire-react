import React from "react";
import PostContentItem from "./PostContentItem";
import { Grid } from "@mui/material";
import Arrows from "../commons/Arrows";
export default function PostContent({ blogs }) {
  return (
    <div className="post-content">
      <Grid
        container
        display="flex"
        flexDirection={{ sm: "column", xs: "column", md: "row" }}
      >
        <Grid item md={5} xs={12} sm={12} order={{ sm: 1, xs: 1, md: 0 }}>
          <Arrows />
        </Grid>
        <Grid item md={6} xs={12} sm={12} className="hero-post">
          <PostContentItem blogs={blogs} />
        </Grid>
      </Grid>
    </div>
  );
}
