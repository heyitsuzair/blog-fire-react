import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Delete, ModeEdit } from "@mui/icons-material";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    "&.MuiDataGrid-root": {
      fontFamily: "Poppins",
      color: "var(--color-heading)",
    },
    "& .MuiTablePagination-displayedRows": {
      color: "var(--color-heading)",
    },
    "& .MuiDataGrid-footerContainer .Mui-disabled svg": {
      color: "#878787",
    },
    "& .MuiDataGrid-footerContainer .MuiButtonBase-root": {
      color: "var(--color-heading)",
    },
  },
});

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 130 },
  { field: "slug", headerName: "Slug", width: 130 },
  { field: "status", headerName: "Status", width: 130 },
  { field: "image", headerName: "Image", width: 130 },
  { field: "category", headerName: "Categories", width: 130 },

  {
    field: "Action",
    renderCell: (cellValues) => {
      return (
        <>
          <Button
            size="small"
            variant="outlined"
            color="error"
            style={{ marginRight: "1rem" }}
            // onClick={() => deleteClass(cellValues.row._id)}
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
    width: 200,
  },
];

const rows = [
  {
    id: 1,
    title: "title",
    slug: "slug",
    status: "status",
    image: "image",
    category: "category",
  },
  {
    id: 2,
    title: "title",
    slug: "slug",
    status: "status",
    image: "image",
    category: "category",
  },
  {
    id: 3,
    title: "title",
    slug: "slug",
    status: "status",
    image: "image",
    category: "category",
  },
  {
    id: 4,
    title: "title",
    slug: "slug",
    status: "status",
    image: "image",
    category: "category",
  },
  {
    id: 5,
    title: "title",
    slug: "slug",
    status: "status",
    image: "image",
    category: "category",
  },
  {
    id: 6,
    title: "title",
    slug: "slug",
    status: "status",
    image: "image",
    category: "category",
  },
  {
    id: 7,
    title: "title",
    slug: "slug",
    status: "status",
    image: "image",
    category: "category",
  },
  {
    id: 8,
    title: "title",
    slug: "slug",
    status: "status",
    image: "image",
    category: "category",
  },
  {
    id: 9,
    title: "title",
    slug: "slug",
    status: "status",
    image: "image",
    category: "category",
  },
];

export default function DataTable() {
  const classes = useStyles();

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
        className={classes.root}
      />
    </div>
  );
}
