import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Tabs from "../commons/Tabs";
import VerticalCard from "../commons/VerticalCard";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import VerticalCardSkeleton from "./VerticalCardSkeleton";

export default function Innovation() {
  // loading state
  const [loading, setLoading] = useState(true);

  // data that is parsed depending upon the selected tab
  const [parsedBlogs, setParsedBlogs] = useState([]);

  // active state for tab
  const [active, setActive] = useState(0);

  //tabs name
  const tabs = ["Gadget", "Design", "Marketing", "Technology"];

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
    <div className="innovation">
      <Container sx={{ maxWidth: "1280px !important" }}>
        <h1 className="section-heading">Innovation & Tech</h1>
        <Grid container gap={{ md: 2, sm: 2, xs: 1 }}>
          <Tabs tabs={tabs} setActive={setActive} active={active} />
        </Grid>
        {loading === true ? (
          <VerticalCardSkeleton />
        ) : (
          <Grid container columnSpacing={{ md: 2, sm: 2, xs: 1 }}>
            {parsedBlogs
              .slice(0, 3)
              .sort(() => Math.random() - 0.5)
              .map((blog, index) => {
                return (
                  <Grid key={index} item md={4} xs={12} sm={6}>
                    <VerticalCard blog={blog} category={tabs[active]} />
                  </Grid>
                );
              })}
          </Grid>
        )}
      </Container>
    </div>
  );
}
