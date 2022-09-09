import React, { useContext, useEffect, useState } from "react";
import BreadCrumb from "../components/dashboard/Breadcrumb/BreadCrumb";
import Table from "../components/dashboard/Table/Table";
import blogContext from "../context/blogContext";
import { Link } from "react-router-dom";
import { Delete, ModeEdit } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function Blogs({ setProgress }) {
  // purpose:to fetch blogs of logged in user
  const blog_context = useContext(blogContext);
  const { LoggedInUserBlogs, userBlogs, deleteBlog } = blog_context;

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
            <Link to={`editClass/${cellValues.row._id}`}>
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
    LoggedInUserBlogs();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    setProgress(0);
    setProgress(30);
    // getting all blogs through prop available in db and adding it to table rows
    setProgress(60);
    setRows(userBlogs);
    setProgress(100);
    // eslint-disable-next-line
  }, [userBlogs]);

  return (
    <div className="blogs">
      <BreadCrumb text="Blogs" />
      <div className="dashboard-table">
        <Table rows={rows} columns={columns} />
      </div>
    </div>
  );
}
