import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Tabs from "../commons/Tabs";
import HorizontalTab from "../commons/HorizontalTab";
export default function Innovation() {
  // tabs name
  const tabs = ["Gadget", "Travel", "SEO", "Research"];
  // make the tab active
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="most-popular">
      <Container sx={{ maxWidth: "1280px !important" }}>
        <h1 className="section-heading">Most Popular</h1>
        <Grid container gap={{ md: 2, sm: 2, xs: 1 }}>
          <Tabs tabs={tabs} />
        </Grid>
        <Grid container marginTop={{ md: 3 }}>
          <Grid item md={12}>
            <HorizontalTab
              index={0}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </Grid>
          <Grid item md={12}>
            <HorizontalTab
              index={1}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </Grid>
          <Grid item md={12}>
            <HorizontalTab
              index={2}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
