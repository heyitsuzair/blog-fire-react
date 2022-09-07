import React from "react"
import { Grid } from "@mui/material"
import Search from "./Search"
import SidebarPost from "./SidebarPost"
import { LinkedIn, Facebook, Twitter, GitHub } from "@mui/icons-material"
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
        <Grid item className="sidebar-item" lg={12} md={12} sm={12} xs={12}>
          <h3>Stay In Touch</h3>
          <div className="social">
            <Grid item lg={3} md={3} sm={3} xs={3}>
              <a
                href="//linkedin.com/in/uzair-dev/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="icon linkedin">
                  <LinkedIn />
                </div>
              </a>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
              <a href="//fb.com/uzair354123" target="_blank" rel="noreferrer">
                <div className="icon fb">
                  <Facebook />
                </div>
              </a>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
              <a
                href="//twitter.com/uzair354123"
                target="_blank"
                rel="noreferrer"
              >
                <div className="icon twitter">
                  <Twitter />
                </div>
              </a>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
              <a
                href="//github.com/heyitsuzair"
                target="_blank"
                rel="noreferrer"
              >
                <div className="icon github">
                  <GitHub />
                </div>
              </a>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
