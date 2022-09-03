import React, { useState } from "react";
import { Grid } from "@mui/material";

export default function Tabs() {
  const [active, setActive] = useState(0);
  const tabs = ["Gadget", "Design", "Marketing", "Technology"];

  // handle when clicked on tab and set active tab index
  const handleTabClick = (index) => {
    setActive(index);
  };

  return (
    <>
      {tabs.map((tab, index) => {
        return (
          <Grid
            item
            xs={3.5}
            sm={2}
            md={1.2}
            className="tabs"
            justifyContent="center"
          >
            <div
              key={index}
              className={`tab-item ${index === active ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </div>
          </Grid>
        );
      })}
    </>
  );
}
