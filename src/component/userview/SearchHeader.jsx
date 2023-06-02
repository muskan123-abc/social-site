import React from "react";
import { SearchICon } from "../common/Icons";

const SearchHeader = () => {
  return (
    <div className="mt-2 px-4 rounded-lg bg-light_black flex items-center">
      <span className="cursor-pointer">
        <SearchICon />
      </span>
      <input
        type="text"
        className=" text-white ff_opensans font-normal bg-light_black text-base  p-2 w-full outline-none pl-5 "
        placeholder="Search or start new chat"
      />
    </div>
  );
};

export default SearchHeader;
