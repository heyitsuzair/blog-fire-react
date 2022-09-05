import React from "react";
import { Grid } from "@mui/material";
import Search from "./Search";
import SidebarPost from "./SidebarPost";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Grid container gap={2}>
        <Grid item className="sidebar-item" lg={12} md={12} sm={12} xs={12}>
          <h3>Search</h3>
          <Search />
        </Grid>
        <Grid item className="sidebar-item" lg={12} md={12} sm={12} xs={12}>
          <h3>Popular</h3>
          <SidebarPost />
          <SidebarPost />
          <SidebarPost />
          <SidebarPost />
        </Grid>
      </Grid>
    </div>
  );
}
