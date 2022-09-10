import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import {
  CheckCircle,
  PauseCircleFilled,
  Storage,
  TrendingUp,
} from "@mui/icons-material";
import axios from "axios";
export default function Stats() {
  // state to set user ip
  const [ip, setIp] = useState();

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
      <Grid container>
        <Grid item lg={6} className="stats-header">
          <h3>Statistics</h3>
        </Grid>
        <Grid item lg={6} className="stats-header" textAlign="right">
          <span>Updated Few Seconds Ago</span>
        </Grid>
      </Grid>
      <Grid container marginTop={3}>
        <Grid item lg={3} className="stats-item">
          <div className="stats-icon" style={{ justifyContent: "flex-start" }}>
            <TrendingUp className="icon" />
            <div className="data">
              <span>0</span>
              <h4>Views</h4>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} className="stats-item">
          <div className="stats-icon">
            <CheckCircle className="icon" />
            <div className="data">
              <span>0</span>
              <h4>Published Blogs</h4>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} className="stats-item">
          <div className="stats-icon">
            <PauseCircleFilled className="icon" />
            <div className="data">
              <span>0</span>
              <h4>Pending Blogs</h4>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} className="stats-item">
          <div className="stats-icon" style={{ justifyContent: "flex-end" }}>
            <Storage className="icon" />
            <div className="data">
              <span>{ip}</span>
              <h4>Your IP</h4>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
