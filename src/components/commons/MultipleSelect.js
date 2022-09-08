import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";

const MenuProps = {
  PaperProps: {
    sx: {
      width: 250,
      backgroundColor: "var(--bg-color-white) !important",
    },
  },
};

const useStyles = makeStyles({
  select: {
    "& .MuiSelect-outlined": {
      padding: "0.6rem 0.8rem",
      color: "var(--color-heading) !important",
      fontFamily: "Poppins !important",
    },
    "& svg": {
      color: "var(--color-heading) !important",
    },
  },
  input: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#878787 !important",
    },
    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "var(--color-primary) !important",
      },
    },
  },
  label: {
    top: "-0.5rem !important",
    color: "#878787 !important",
    "&.Mui-focused": {
      color: "var(--color-primary) !important",
    },
  },
  li: {
    backgroundColor: "var(--bg-color-white) !important",
    color: "var(--color-gray) !important",
    fontFamily: "Poppins !important",
    "&.Mui-selected": {
      backgroundColor: "var(--color-primary) !important",
      color: "white !important",
    },
  },
});

function getStyles(name, catName, theme) {
  return {
    fontWeight:
      catName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect({
  label,
  values,
  value,
  multiSelect,
  onChange,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const [catName, setCatName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCatName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    onChange(event);
  };

  return (
    <div className="multi-select">
      <FormControl sx={{ m: 1, width: "95%" }}>
        <InputLabel className={classes.label} id="demo-multiple-name-label">
          {label}
        </InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple={multiSelect}
          fullWidth
          value={catName}
          onChange={handleChange}
          input={
            <OutlinedInput fullWidth className={classes.input} label={label} />
          }
          MenuProps={MenuProps}
          className={classes.select}
          name={label.toLowerCase()}
        >
          {values.map((value) => (
            <MenuItem
              key={value}
              value={value}
              style={getStyles(value, catName, theme)}
              className={classes.li}
            >
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
