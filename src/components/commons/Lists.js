import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { Link } from "react-router-dom";

export default function NestedList() {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360 }}
      className="lists"
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton>
        <Link to="/" className="list-item">
          Home
        </Link>
      </ListItemButton>
      <ListItemButton>
        <Link to="/" className="list-item">
          Blog
        </Link>
      </ListItemButton>
    </List>
  );
}
