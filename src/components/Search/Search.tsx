import React from "react";
import { CiSearch } from "react-icons/ci";
import CustomInput from "../CustomInput/CustomInput";

const Search = () => {
  return (
    <div className="flex">
      <CustomInput
        id="search"
        className="relative w-full py-2 pl-8 border rounded-md outline-gray-300"
        inputProps={{
          type: "text",
          placeholder: "Search",
        }}
      />

      <div className="absolute">
        <CiSearch size={30} className="text-gray-500 pl-2 mt-1.5 focus-gray" />
      </div>
    </div>
  );
};

export default Search;
