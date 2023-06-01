import React from "react";
import TabHeader from "./TabHeader";
import SearchHeader from "./SearchHeader";
import { TabData } from "../common/Helper";

const UserTab = () => {
  return (
    <div className="w-[665px] h-full bg-dark overflow-hidden">
      <TabHeader />
      <SearchHeader />
      <div className="overflow-auto h-full">
        {TabData.map((value, i) => {
          return (
            <div className="mt-3 px-4 py-2" key={i}>
              <div className="flex items-center ">
                <img
                  className="w-[40px] h-[40px] rounded-[50%]"
                  src={value.image}
                  alt="images"
                />
                <div className="flex items-center justify-between w-full border-b ">
                  <div>
                    <h2 className="pl-3 text-white font-semibold">
                      {value.name}
                    </h2>
                    <p className="pl-3 text-white">as</p>
                  </div>
                  <div>
                    <p className="pl-3 text-white font-thin">{value.time}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserTab;
