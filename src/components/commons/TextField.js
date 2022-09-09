import React, { useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { useLocation } from "react-router-dom";
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
  const ref = useRef();

  // get the current url
  const location = useLocation();

  // purpose:to check whether if it is edit blog page, if yes, than check if label is slug,if yes than add a disabled attribute to text field
  const checkIfEdit = (label) => {
    if (label === "Slug" && location.pathname.match("/dashboard/editBlog")) {
      console.log(ref.current);
      ref.current.setAttribute("disabled", "");
      ref.current.style.opacity = ".5";
    }
  };

  useEffect(() => {
    checkIfEdit(label);
    //eslint-disable-next-line
  }, []);

  return (
    <div className="text-field">
      <span className="form-spans">{label}</span>
      <TextField
        id="outlined-size-small"
        onChange={(e) => onChange(e)}
        size="small"
        name={label.toLowerCase()}
        required
        className={classes.root}
        fullWidth
        value={value}
        inputProps={{
          ref: ref,
        }}
      />
    </div>
  );
}
