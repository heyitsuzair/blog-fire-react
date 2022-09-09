import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import userContext from "../../context/userContext";
import { Link } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";

export default function BasicMenu() {
  // purpose:Logout the user when clicked on logout
  const user_context = React.useContext(userContext);
  const { Logout } = user_context;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // get logged in user
  const getUser = JSON.parse(localStorage.getItem("blog-user"));

  return (
    <div className="popover">
      {getUser === null ? (
        <Link to="/auth">
          <div
            className="profile-pic"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <AccountCircle />
          </div>
        </Link>
      ) : (
        <div
          className="profile-pic"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <img src={getUser.pic} alt="Profile" />
        </div>
      )}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link
          className="td-none"
          style={{ color: "var(--color-gray)" }}
          to="/dashboard"
        >
          <MenuItem onClick={handleClose}>Dashboard</MenuItem>
        </Link>
        <MenuItem
          onClick={() => {
            handleClose();
            Logout();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
