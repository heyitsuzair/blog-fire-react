import React from "react";
import { Grid } from "@mui/material";
import logo_black from "../../assets/img/logo-black.webp";
import logo_white from "../../assets/img/logo-white.webp";
import MenuItem from "./MenuItem";
import HeaderRight from "./HeaderRight";
import { useContext } from "react";
import modeContext from "../../context/modeContext";
import userContext from "../../context/userContext";
import { Link } from "react-router-dom";

export default function Header() {
  // using the mode context to check whether mode is light or dark and according to criteria switching the brand image
  const mode_context = useContext(modeContext);
  const { mode } = mode_context;

  // use the following state to check whether user is logged in or not and according to condition show the "My Account" in menu
  const user_context = useContext(userContext);
  const { user } = user_context;

  // use the following localStorage to check whether user is logged in or not and according to condition show the "My Account" in menu
  const getUser = localStorage.getItem("blog-user");

  return (
    <div className="header">
      <Grid container>
        <Grid item md={2} xs={4} sm={10}>
          <Link to="/">
            <img
              src={mode === "light" ? logo_black : logo_white}
              alt="Loading..."
              className="brand"
            />
          </Link>
        </Grid>
        <Grid
          item
          md={6}
          sm={8}
          display={window.innerWidth < 768 ? "none" : "flex"}
          justifyContent="center"
          alignItems="center"
          className="hidden"
          gap={2}
        >
          <MenuItem title="Home" to="/" />
          <MenuItem title="Blogs" to="/blog" />
          {getUser !== null || user !== null ? (
            <MenuItem title="Dashboard" to="/dashboard" />
          ) : (
            ""
          )}
        </Grid>
        <Grid
          item
          md={4}
          xs={8}
          sm={2}
          textAlign="right"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          gap={{ md: 1 }}
        >
          <HeaderRight />
        </Grid>
      </Grid>
    </div>
  );
}
