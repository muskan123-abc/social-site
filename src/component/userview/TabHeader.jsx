import React from "react";
import UserImg from "../../assets/img/png/user.png";
import { DotsIcon, MessageIcon, SpeakerIcon } from "../common/Icons";
import Status from "./Status";
const TabHeader = () => {
  return (
    <div className="p-4 flex justify-between bg-light_black">
      <img
        className="w-[40px] h-[40px] rounded-[50%]"
        src={UserImg}
        alt="UserImg"
      />
      <div className="flex items-center">
        <div className="ml-8 cursor-pointer">
          <SpeakerIcon />
        </div>
        <Status />
        <div className="ml-8 cursor-pointer">
          <MessageIcon />
        </div>
        <div className="ml-8 cursor-pointer">
          <DotsIcon />
        </div>
      </div>
    </div>
  );
};

export default TabHeader;
