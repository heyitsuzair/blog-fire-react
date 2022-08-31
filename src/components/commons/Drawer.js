import * as React from "react";
import Box from "@mui/material/Box";
import { Drawer } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import logo from "../../assets/img/logo-black.webp";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="drawer-header">
        <div className="logo">
          <img src={logo} width={100} alt="Loading..." />
        </div>
        <div
          className="close-drawer"
          onClick={() => setState({ ...state, [anchor]: false })}
        >
          <Close />
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div
            className="header-icons menu"
            onClick={toggleDrawer(anchor, true)}
          >
            <Menu />
          </div>

          <Drawer
            className="drawer"
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            BackdropProps={{
              sx: {
                backgroundColor: "black",
                opacity: ".8 !important",
              },
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
