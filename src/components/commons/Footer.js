import React, { useContext } from "react";
import { Grid } from "@mui/material";
import img_dark from "../../assets/img/logo-black.webp";
import img_light from "../../assets/img/logo-white.webp";
import modeContext from "../../context/modeContext";
import { GitHub, Twitter, LinkedIn, Facebook } from "@mui/icons-material";
export default function Footer() {
  // use the following context to check whether theme is light or dark and switch the img accordingly
  const mode_context = useContext(modeContext);
  const { mode } = mode_context;
  return (
    <div className="footer">
      <Grid
        container
        className="grid"
        alignItems="center"
        textAlign={{ md: "center", sm: "center", xs: "center", lg: "left" }}
      >
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <img
            src={mode === "dark" ? img_light : img_dark}
            alt="Loading..."
            className="img"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} className="social-parent">
          <h3>Follow Us</h3>
          <Grid
            item
            display="flex"
            gap={{ lg: 2, md: 4, sm: 3, xs: 3 }}
            className="social"
          >
            <div className="social-item">
              <a
                href="//github.com/heyitsuzair"
                target="_blank"
                rel="noreferrer"
              >
                <div className="icon github">
                  <GitHub />
                </div>
              </a>
            </div>
            <div className="social-item">
              <a
                href="//twitter.com/uzair354123"
                target="_blank"
                rel="noreferrer"
              >
                <div className="icon twitter">
                  <Twitter />
                </div>
              </a>
            </div>
            <div className="social-item">
              <a
                href="//linkedin.com/in/uzair-dev/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="icon linkedin">
                  <LinkedIn />
                </div>
              </a>
            </div>
            <div className="social-item">
              <a href="//fb.com/uzair354123" target="_blank" rel="noreferrer">
                <div className="icon fb">
                  <Facebook />
                </div>
              </a>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
