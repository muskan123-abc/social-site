import React from "react";
import UserImg from "../../assets/img/user.png";
import { DotsIcon, MessageIcon, SpeakerIcon, StatusIcon } from "../common/Icons";
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
      <div className="ml-8 cursor-pointer">
        <StatusIcon />
      </div>
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
