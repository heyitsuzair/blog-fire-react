import * as React from "react";
import Box from "@mui/material/Box";
import { Drawer } from "@mui/material";
import { Close } from "@mui/icons-material";
import logo_black from "../../assets/img/logo-black.webp";
import logo_white from "../../assets/img/logo-white.webp";

import { useContext } from "react";
import modeContext from "../../context/modeContext";
export default function TemporaryDrawer({
  anchor,
  data,
  toggleDrawer,
  state,
  setState,
}) {
  const mode_context = useContext(modeContext);
  // purpose: to check whether mode is light and dark and toggle the logo accoring to mode
  const { mode } = mode_context;

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="drawer-header">
        <div className="logo">
          <img
            src={mode === "dark" ? logo_white : logo_black}
            width={100}
            alt="Loading..."
          />
        </div>
        <div
          className="close-drawer"
          onClick={() => setState({ ...state, [anchor]: false })}
        >
          <Close sx={{ color: mode === "dark" ? "white" : "" }} />
        </div>
      </div>
      {/* Data to render that is coming from data prop */}
      <div className="drawer-data">{data}</div>
    </Box>
  );

  return (
    <div>
      {[anchor].map((anchor) => (
        <React.Fragment key={anchor}>
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
