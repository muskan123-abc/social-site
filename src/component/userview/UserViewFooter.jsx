import React from "react";
import UserImage from "../../assets/img/user.png";
import { DotsIcon, EmojiIcon, Mich, SoundIcon } from "../common/Icons";

const UserViewFooter = () => {
  return (
    <div className="bg-light_black w-full  absolute bottom-0">
      <div className=" px-4 py-3">
        <div className="flex items-center">
          <DotsIcon />
          <SoundIcon />
          <input
            type="text"
            className="bg-dark text-white p-2 w-full  outline-none  pl-5 rounded-lg"
            placeholder="Search or start new chat"
          />
          <img className="w-11" src={UserImage} alt="userimage" />
        </div>
      </div>
    </div>
  );
};

export default UserViewFooter;
