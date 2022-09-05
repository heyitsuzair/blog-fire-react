import React from "react";
import PostListView from "../commons/PostListView";
import { Grid, Container } from "@mui/material";

export default function PostList() {
  return (
    <div className="post-list">
      <Container sx={{ maxWidth: "1280px !important" }}>
        <Grid container columnSpacing={{ lg: 3, md: 0 }}>
          <Grid item lg={8} md={12} sm={12} xs={12}>
            <PostListView />
            <PostListView />
            <PostListView />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            hello
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
