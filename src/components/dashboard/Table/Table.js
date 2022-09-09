import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

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
    "& .status-Pending": {
      backgroundColor: "yellow",
      padding: ".5rem .5rem",
      borderRadius: "5px",
      width: "68%",
      textAlign: "center",
    },
    "& .status-Published": {
      backgroundColor: "limegreen",
      padding: ".5rem .5rem",
      borderRadius: "5px",
      width: "68%",
      textAlign: "center",
    },
    "& .status-Draft": {
      backgroundColor: "red",
      padding: ".5rem .5rem",
      borderRadius: "5px",
      width: "68%",
      textAlign: "center",
    },
  },
});

export default function DataTable({ rows, columns }) {
  const classes = useStyles();

  return (
    <div style={{ height: 645, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        className={classes.root}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}
