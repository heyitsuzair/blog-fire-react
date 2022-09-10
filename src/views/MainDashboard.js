import React, { useContext, useEffect, useState } from "react";
import BreadCrumb from "../components/dashboard/Breadcrumb/BreadCrumb";
import Stats from "../components/dashboard/Stats/Stats";
import blogContext from "../context/blogContext";
import { Grid, Button } from "@mui/material";
import Table from "../components/dashboard/Table/Table";
import { ModeEdit, Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function MainDashboard({ setProgress }) {
  // logged in user info
  const getUser = JSON.parse(localStorage.getItem("blog-user"));

  // use the following context to get blog data including views, published blogs, draft blogs
  const blog_context = useContext(blogContext);

  const {
    LoggedInUserBlogs,
    blogsCalculation,
    totalViews,
    userBlogs,
    published,
    deleteBlog,
  } = blog_context;

  //rows for table
  const [rows, setRows] = useState([]);

  const columns = [
    { field: "index", headerName: "ID", width: 40 },
    { field: "title", headerName: "Title", width: 130 },
    { field: "slug", headerName: "Slug", width: 130 },
    {
      field: "Status",
      renderCell: (cellValues) => {
        return (
          <>
            <span className={`status-${cellValues.row.status}`}>
              {cellValues.row.status}
            </span>
          </>
        );
      },
      width: 130,
    },
    {
      field: "Image",
      renderCell: (cellValues) => {
        return (
          <>
            <img
              src={cellValues.row.image}
              alt="Loading..."
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "5px",
              }}
            />
          </>
        );
      },
      width: 130,
    },
    { field: "category", headerName: "Categories", width: 150 },
    { field: "views", headerName: "Views", width: 70 },

    {
      field: "Action",
      renderCell: (cellValues) => {
        return (
          <>
            <Button
              size="small"
              variant="outlined"
              color="error"
              style={{ marginRight: ".4rem" }}
              onClick={() => deleteBlog(cellValues.row.id)}
            >
              <Delete />
            </Button>
            <Link to={`/dashboard/editBlog/${cellValues.row.id}`}>
              <Button size="small" variant="outlined" color="secondary">
                <ModeEdit />
              </Button>
            </Link>
          </>
        );
      },
      width: 150,
    },
  ];

  useEffect(() => {
    setProgress(0);

    setProgress(30);

    LoggedInUserBlogs(getUser.email);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    setProgress(60);
    blogsCalculation();
    // setting rows for table
    setRows(userBlogs);
    setProgress(100);
    //eslint-disable-next-line
  }, [userBlogs]);

  return (
    <div className="main-dashboard">
      <BreadCrumb text="Main" />
      <div className="dashboard-sec">
        <Stats
          totalViews={totalViews}
          published={published}
          totalBlogs={userBlogs.length}
        />
      </div>
      <Grid container gap={{ lg: 2 }}>
        <Grid item lg={8} className="dashboard-sec">
          <Table rows={rows.slice(0, 2)} columns={columns} />
          {rows.length < 1 ? (
            ""
          ) : (
            <Link to="/dashboard/blogs" className="td-none">
              <Button variant="contained" className="blog-form-submit">
                See More
              </Button>
            </Link>
          )}
        </Grid>
        <Grid item lg={3.8} className="dashboard-sec">
          hello
        </Grid>
      </Grid>
    </div>
  );
}
