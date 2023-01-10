import React, { useState } from "react";

const Search = ({ handleChange }) => {
  return (
    <>
      <input placeholder="Search..." onChange={handleChange} />
    </>
  );
};

export default Search;
