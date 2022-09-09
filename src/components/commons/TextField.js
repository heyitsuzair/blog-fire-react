import React from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#878787 !important",
      },
      "&.Mui-focused": {
        "& fieldset": {
          borderColor: "var(--color-primary) !important",
        },
      },
    },
    "& .MuiFormLabel-root": {
      color: "#878787 !important",
      fontFamily: "Poppins",
      "&.Mui-focused": {
        color: "var(--color-primary) !important",
      },
    },
    "& .MuiOutlinedInput-input": {
      color: "var(--color-heading) !important",
    },
  },
});
export default function TextFieldComponent({ label, value, onChange }) {
  const classes = useStyles();

  return (
    <div className="text-field">
      <span className="form-spans">{label}</span>
      <TextField
        id="outlined-size-small"
        defaultValue={value}
        onChange={(e) => onChange(e)}
        size="small"
        name={label.toLowerCase()}
        required
        className={classes.root}
        fullWidth
      />
    </div>
  );
}
