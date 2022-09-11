import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";

export default function FloatingBtn({ action, icon, btnClass, position }) {
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
        position: "fixed",
        right: position === "bottom-right" ? 0 : 70,
        bottom: 0,
      }}
    >
      <Fab
        className={`floating-btn ${btnClass}`}
        aria-label="add"
        onClick={() => action()}
      >
        {icon}
      </Fab>
    </Box>
  );
}
