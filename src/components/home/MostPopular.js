import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Tabs from "../commons/Tabs";
import HorizontalTab from "../commons/HorizontalTab";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import HorizontalTabSkeleton from "./HorizontalTabSkeleton";
export default function Innovation() {
  // active state for tab
  const [active, setActive] = useState(0);

  // tabs name
  const tabs = ["Gadget", "Travel", "SEO", "Research"];

  // make the horizontal tab active
  const [activeTab, setActiveTab] = useState(0);

  // loading state
  const [loading, setLoading] = useState(true);

  // data that is parsed depending upon the selected tab
  const [parsedBlogs, setParsedBlogs] = useState([]);

  // filtering data according to the tab selected
  const filterBlogs = async () => {
    // creating query
    const filterQuery = query(
      collection(db, "blogs"),
      where("category", "array-contains", tabs[active])
    );

    // executing query
    const filterSnapshot = await getDocs(filterQuery);

    // looping incoming data and adding it to parsedBlogState
    setParsedBlogs(
      filterSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    filterBlogs();
    // eslint-disable-next-line
  }, [active]);

  return (
    <div className="most-popular">
      <Container sx={{ maxWidth: "1280px !important" }}>
        <h1 className="section-heading">Most Popular</h1>
        <Grid container gap={{ md: 2, sm: 2, xs: 1 }}>
          <Tabs tabs={tabs} setActive={setActive} active={active} />
        </Grid>
        {loading === true ? (
          <HorizontalTabSkeleton />
        ) : (
          <Grid container marginTop={{ md: 3 }}>
            <Grid item md={12}>
              {parsedBlogs.slice(0, 3).map((blog, index) => {
                return (
                  <HorizontalTab
                    key={index}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    blog={blog}
                    index={index}
                    category={tabs[active]}
                  />
                );
              })}
            </Grid>
          </Grid>
        )}
      </Container>
    </div>
  );
}
