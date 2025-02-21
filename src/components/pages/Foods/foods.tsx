import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FoodFilter } from "../../components/FoodFilter/foodfilter";
import { FoodList } from "../../components/FoodList/foodlist";
import {Contact } from "../../pages/Contact/contact";
export const Foods: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <div style={{margin:"80px"}}>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <FoodList />
      <Contact/>
    </div>
  );
};
