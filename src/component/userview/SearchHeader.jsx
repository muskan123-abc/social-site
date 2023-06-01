import React from "react";

const SearchHeader = () => {
  return (
    <div className="pt-2 px-4">
      <input
        type="text"
        className="bg-light_black text-white ff_source font-normal text-base  p-2 w-full outline-none pl-5 rounded-lg"
        placeholder="Search or start new chat"
      />
    </div>
  );
};

export default SearchHeader;
