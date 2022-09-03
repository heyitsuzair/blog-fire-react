import React from "react";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import Topic from "../commons/Topic";
export default function Innovation() {
  return (
    <div className="trending-topics">
      <Container sx={{ maxWidth: "1280px !important" }}>
        <h1 className="section-heading">Trending Topics</h1>
        <Grid container rowSpacing={{ xs: 5, sm: 3, md: 3 }}>
          <Grid item md={2} sm={4} xs={6}>
            <Topic title="SEO" />
          </Grid>
          <Grid item md={2} sm={4} xs={6}>
            <Topic title="SEO" />
          </Grid>
          <Grid item md={2} sm={4} xs={6}>
            <Topic title="SEO" />
          </Grid>
          <Grid item md={2} sm={4} xs={6}>
            <Topic title="SEO" />
          </Grid>
          <Grid item md={2} sm={4} xs={6}>
            <Topic title="SEO" />
          </Grid>
          <Grid item md={2} sm={4} xs={6}>
            <Topic title="SEO" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
