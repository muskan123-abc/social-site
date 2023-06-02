import React from "react";
import { PersonalData } from "../common/Helper";
import { DeleteICon } from "../common/Icons";
const PersonalChat = () => {
  return (
    <div className="overflow-auto sidebar_chat  h-full bg-whatshap-background bg-no-repeat bg-cover ">
      {PersonalData.map((value, i) => {
        if (i === 3) {
          return (
            <div className=" max-w-[100px] md:max-w-[200px]" key={i}>
              <img src={value.image} />
            </div>
          );
        }
        return (
          <div className="p-10 " key={i}>
            <div className="flex items-center">
              <div className=" flex flex-col items-start ">
                <p className="text-white max-w-[200px]  xl:max-w-sm break-words w-auto ff_opensans font-normal text-base bg-light_black border  inline  border-light_black   px-2 py-1 rounded-lg">
                  {value.para}
                </p>
              </div>
              <DeleteICon />
            </div>
            <div className=" flex flex-col items-end mt-3 ">
              <p className="text-white max-w-[200px]  ms-5 xl:max-w-sm break-words  font-normal text-base  ff_opensans bg-light_black border  inline border-light_black   px-2 py-1 rounded-lg">
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
