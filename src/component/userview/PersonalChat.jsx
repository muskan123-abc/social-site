import React from "react";
import { PersonalData } from "../common/Helper";
const PersonalChat = () => {
  return (
    <div className="overflow-auto sidebar_chat  h-full">
      {PersonalData.map((value, i) => {
        return (
          <div className="p-10" key={i}>
            <div className=" flex flex-col items-start">
              <p className="text-white w-auto ff_source font-normal text-base bg-light_black border  inline  border-light_black   px-2 py-1 rounded-lg">
                {value.para}
              </p>
            </div>
            <div className=" flex flex-col items-end">
              <p className="text-white font-normal text-base  ff_source bg-light_black border  inline border-light_black   px-2 py-1 rounded-lg">
                {value.para2}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PersonalChat;
