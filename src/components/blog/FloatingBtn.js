import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { BookmarkAdd } from "@mui/icons-material";

export default function FloatingBtn({ action }) {
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
        position: "fixed",
        right: 0,
        bottom: 0,
      }}
    >
      <Fab className="floating-btn" aria-label="add" onClick={() => action()}>
        <BookmarkAdd />
      </Fab>
    </Box>
  );
}
