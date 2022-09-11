import React from "react";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import Topic from "../commons/Topic";

export default function Innovation() {
  // topic components images
  const images = {
    design: require("../../assets/img/design.webp"),
    tech: require("../../assets/img/tech.jpg"),
    seo: require("../../assets/img/seo.webp"),
    gadget: require("../../assets/img/gadget.jpg"),
    travel: require("../../assets/img/travel.jpg"),
    research: require("../../assets/img/research.jpg"),
  };

  return (
    <div className="trending-topics">
      <Container sx={{ maxWidth: "1280px !important" }}>
        <h1 className="section-heading">Trending Topics</h1>
        <Grid container rowSpacing={{ xs: 5, sm: 3, md: 3 }}>
          <Grid item md={2} sm={4} xs={6}>
            <Topic title="Design" img={images.design} />
          </Grid>
          <Grid item md={2} sm={4} xs={6}>
            <Topic title="Technology" img={images.tech} />
          </Grid>
          <Grid item md={2} sm={4} xs={6}>
            <Topic title="SEO" img={images.seo} />
          </Grid>
          <Grid item md={2} sm={4} xs={6}>
            <Topic title="Gadget" img={images.gadget} />
          </Grid>
          <Grid item md={2} sm={4} xs={6}>
            <Topic title="Travel" img={images.travel} />
          </Grid>
          <Grid item md={2} sm={4} xs={6}>
            <Topic title="Research" img={images.research} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
