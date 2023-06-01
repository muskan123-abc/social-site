import React from "react";
import UserImage from "../../assets/img/user.png";
const UserViewFooter = () => {
  return (
    <div className="bg-light_black w-full  absolute bottom-0">
      <div className=" px-4 py-3">
        <div className="flex items-center ">
          <img
            className="w-[40px] h-[40px] rounded-[50%]"
            src={UserImage}
            alt="images"
          />
          <div className="flex items-center justify-between w-full ">
            <div>
              <h2 className="pl-3 text-white font-semibold">fghjk</h2>
              <p className="pl-3 text-white">as</p>
            </div>
            <div>
              <p className="pl-3 text-white font-thin">nnn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserViewFooter;
