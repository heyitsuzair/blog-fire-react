import React from "react";
import { Grid } from "@mui/material";
import logo_black from "../../assets/img/logo-black.webp";
import logo_white from "../../assets/img/logo-white.webp";
import MenuItem from "./MenuItem";
import HeaderRight from "./HeaderRight";
import { useContext } from "react";
import modeContext from "../../context/modeContext";
export default function Header() {
  // using the mode context to check whether mode is light or dark and according to criteria switching the brand image
  const mode_context = useContext(modeContext);
  const { mode } = mode_context;

  return (
    <div className="header">
      <Grid container>
        <Grid item md={2} xs={4} sm={10}>
          <img
            src={mode === "light" ? logo_black : logo_white}
            alt="Loading..."
            className="brand"
          />
        </Grid>
        <Grid
          item
          md={6}
          sm={8}
          display={window.innerWidth < 768 ? "none" : "flex"}
          justifyContent="space-evenly"
          alignItems="center"
          className="hidden"
        >
          <MenuItem title="Home" to="/" />
          <MenuItem title="Blog" to="/" />
          <MenuItem title="Sign Up" to="/auth" />
          <MenuItem title="Login" to="/auth" />
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
