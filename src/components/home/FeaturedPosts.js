import React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Card from "../commons/Card";
export default function PostContent() {
  return (
    <div className="featured-posts">
      <Container sx={{ maxWidth: "1280px !important" }}>
        <h1 className="section-heading">Featured Posts</h1>
        <Grid
          container
          display="flex"
          flexDirection={{ sm: "column", xs: "column", md: "row" }}
          columnSpacing={{ md: 3 }}
          rowSpacing={{ sm: 3, xs: 3 }}
        >
          <Grid item md={6} xs={12} sm={12}>
            <Card />
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            <Card />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
