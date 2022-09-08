import React from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "var(--color-primary) !important",
      },
    },
    "& .MuiFormLabel-root": {
      color: "var(--color-primary) !important",
      fontFamily: "Poppins",
    },
    "& .MuiOutlinedInput-input": {
      color: "var(--color-heading) !important",
    },
  },
});
export default function TextFieldComponent({ label, value }) {
  const classes = useStyles();

  return (
    <div className="text-field">
      <TextField
        label={label}
        id="outlined-size-small"
        defaultValue={value}
        size="small"
        required
        className={classes.root}
        fullWidth
      />
    </div>
  );
}
