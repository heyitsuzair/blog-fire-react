import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
export default function SearchComponent() {
  const navigate = useNavigate();

  // state for search value
  const [value, setValue] = useState("");

  // handle when someone is typing in search input
  const handleOnKeyUp = (e) => {
    if (e.keyCode === 13) {
      navigate(`/search/` + value);
      return;
    }
  };

  // handle on change input
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  // handle when someone click on search
  const handleSearchClick = () => {
    navigate(`/search/` + value);
  };

  return (
    <div className="search">
      <Search
        sx={{ "&:hover": { cursor: "pointer" } }}
        onClick={() => handleSearchClick()}
      />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        value={value}
        onChange={(e) => handleOnChange(e)}
        onKeyUp={(e) => handleOnKeyUp(e)}
      />
    </div>
  );
}
