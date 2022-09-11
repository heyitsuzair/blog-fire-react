import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import {
  CheckCircle,
  LocalLibraryOutlined,
  Storage,
  TrendingUp,
} from "@mui/icons-material";
import axios from "axios";
export default function Stats({ totalViews, published, totalBlogs }) {
  // state to set user ip
  const [ip, setIp] = useState(null);

  // getting visitor's "ip"
  const getIp = async () => {
    await axios.get("https://api.ipify.org/?format=json").then((res) => {
      setIp(res.data.ip);
    });
  };

  useEffect(() => {
    getIp();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="stats">
      <Grid container justifyContent="space-between">
        <Grid item lg={6} className="stats-header">
          <h3>Statistics</h3>
        </Grid>
        <Grid item lg={6} className="stats-header" textAlign="right">
          <span>Updated Few Seconds Ago</span>
        </Grid>
      </Grid>
      <Grid
        container
        columnSpacing={3}
        rowSpacing={3}
        marginTop={4}
        marginBottom={4}
      >
        <Grid item lg={3} md={6} sm={6} xs={6} className="stats-item">
          <div className="stats-icon first">
            <TrendingUp className="icon" />
            <div className="data">
              <span>{totalViews}</span>
              <h4>Views</h4>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={6} className="stats-item">
          <div className="stats-icon">
            <CheckCircle className="icon" />
            <div className="data">
              <span>{published}</span>
              <h4>Published Blogs</h4>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={6} className="stats-item">
          <div className="stats-icon">
            <LocalLibraryOutlined className="icon" />
            <div className="data">
              <span>{totalBlogs}</span>
              <h4>Total Blogs</h4>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={6} className="stats-item">
          <div className="stats-icon last">
            <Storage className="icon" />
            <div className="data">
              <span>{ip === null ? "Loading..." : ip}</span>
              <h4>Your IP</h4>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
