import React from "react";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  TableRows,
  Twitter,
} from "@mui/icons-material";

export default function Social() {
  return (
    <div className="social">
      <Container style={{ maxWidth: "1300px" }} className="container">
        <Grid container textAlign="center">
          <Grid item lg={2} md={4} sm={4} xs={6}>
            <a
              href="//twitter.com/uzair354123"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon twitter">
                <Twitter />
                Twitter
              </div>
            </a>
          </Grid>
          <Grid item lg={2} md={4} sm={4} xs={6}>
            <a href="//fb.com/uzair354123" target="_blank" rel="noreferrer">
              <div className="icon fb">
                <Facebook />
                Facebook
              </div>
            </a>
          </Grid>
          <Grid item lg={2} md={4} sm={4} xs={6}>
            <a
              href="//instagram.com/itx_uzairdeveloper"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon insta">
                <Instagram />
                Instagram
              </div>
            </a>
          </Grid>
          <Grid item lg={2} md={4} sm={4} xs={6}>
            <a
              href="//linkedin.com/in/uzair-dev/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon linkedin">
                <LinkedIn />
                Linkedin
              </div>
            </a>
          </Grid>
          <Grid item lg={2} md={4} sm={4} xs={6}>
            <a href="//github.com/heyitsuzair" target="_blank" rel="noreferrer">
              <div className="icon github">
                <GitHub />
                Github
              </div>
            </a>
          </Grid>
          <Grid item lg={2} md={4} sm={4} xs={6}>
            <a
              href="//stackoverflow.com/users/17360435/muhammad-uzair"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon stack">
                <TableRows />
                Stack Overflow
              </div>
            </a>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
