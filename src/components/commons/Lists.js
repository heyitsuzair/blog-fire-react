import * as React from "react";
import { List, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../../context/userContext";
export default function NestedList() {
  // use the following state to check whether user is logged in or not and according to condition show the "My Account" in menu
  const user_context = useContext(userContext);
  const { user } = user_context;

  // use the following localStorage to check whether user is logged in or not and according to condition show the "My Account" in menu
  const getUser = localStorage.getItem("blog-user");
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
        <Link to="/blog" className="list-item">
          Blog
        </Link>
      </ListItemButton>

      {getUser !== null || user !== null ? (
        <ListItemButton>
          <Link to="/dashboard" className="list-item">
            My Account
          </Link>
        </ListItemButton>
      ) : (
        ""
      )}
    </List>
  );
}
