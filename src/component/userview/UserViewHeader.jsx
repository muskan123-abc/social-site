import React from "react";
import UserImage from "../../assets/img/user.png";
import { DotsIcon } from "../common/Icons";
const UserViewHeader = ({ userData }) => {
  return (
    <div className="bg-light_black w-full ">
      <div className=" px-4 py-3">
        <div className="flex items-center ">
          <img
            className="w-[40px] h-[40px] rounded-[50%]"
            src={UserImage}
            alt="images"
          />
          <div className="flex items-center justify-between w-full ">
            <div>
              <h2 className="pl-3 text-white font-semibold ff_source text-xl mb-0">{userData.name}</h2>
              <p className="pl-3 text-white mb-0 font-normal ff_source text-sm">as</p>
            </div>
            <div>
              <DotsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserViewHeader;
