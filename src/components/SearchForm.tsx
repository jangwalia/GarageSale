"use client";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";

function SearchForm() {
  const [searchCity, setSearchCity] = useState("");
  const router = useRouter();
  function handleNameSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!searchCity) return;
    router.push(`app/events/${searchCity}`);
  }
  return (
    <form onSubmit={handleNameSubmit} className="w-full">
      <TextField
        autoFocus={false}
        color="primary"
        className="rounded-lg"
        fullWidth
        value={searchCity}
        onChange={(event) => setSearchCity(event.target.value)}
        id="outlined-basic"
        placeholder="Search for items"
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "rgba(255, 255, 255, 0.9)", // Slightly brighter on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#a4f839", // Full white when focused
            },
          },
          "& .MuiInputBase-input": {
            color: "rgba(255, 255, 255, 0.9)", // Off-white color for the text
          },
          "& .MuiInputLabel-root": {
            color: "rgba(255, 255, 255, 0.7)", // Off-white color for the label (if you add one)
          },
        }}
      />
    </form>
  );
}

export default SearchForm;
