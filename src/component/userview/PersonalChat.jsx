import React from "react";
import { PersonalData } from "../common/Helper";
import { DeleteICon } from "../common/Icons";
import tick from "../../assets/img/png/tick.png";
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
              <div className="flex items-center gap-3 justify-between bg-light_black border    border-light_black   px-2 py-1 rounded-lg">
                <p className="text-white max-w-[200px]  xl:max-w-[250px] break-words w-auto ff_opensans font-normal text-base ">
                  {value.para}
                </p>
              </div>
              <span className="pt-8 ms-2 cursor-pointer">
                <DeleteICon />
              </span>
            </div>
            <div className=" flex flex-col items-end mt-3 ">
              <div className="flex items-center gap-3 me-6 justify-between bg-light_black border    border-light_black   px-2 py-1 rounded-lg">
                <p className="text-white max-w-[200px]   xl:max-w-[250px] break-words w-auto ff_opensans font-normal text-base ">
                  {value.para}
                </p>
                <span className="pt-3">
                  <img className="w-2 h-2" src={tick} alt="tick" />{" "}
                  <img className="w-2 h-2 ms-1 -mt-2" src={tick} alt="tick" />
                </span>
              </div>
              <span className="cursor-pointer ">
                <DeleteICon />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PersonalChat;
